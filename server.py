import os
import json
import uuid
import hashlib
import binascii
import urllib.parse
import urllib.request
import urllib.error
import threading
from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = int(os.environ.get('PORT', 3000))
ROOT_DIR = os.getcwd()
DB_PATH = os.path.join(ROOT_DIR, 'data', 'db.json')

db_lock = threading.Lock()

def ensure_db():
    db_dir = os.path.dirname(DB_PATH)
    if not os.path.exists(db_dir):
        os.makedirs(db_dir, exist_ok=True)
    if not os.path.exists(DB_PATH):
        with open(DB_PATH, 'w', encoding='utf-8') as f:
            json.dump({"users": {}, "sessions": {}, "progress": {}}, f, indent=2)

def read_db():
    ensure_db()
    with db_lock:
        try:
            with open(DB_PATH, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {"users": {}, "sessions": {}, "progress": {}}

def write_db(db):
    ensure_db()
    with db_lock:
        with open(DB_PATH, 'w', encoding='utf-8') as f:
            json.dump(db, f, indent=2)

def normalize_roll(roll):
    return str(roll or '').strip().upper().replace(' ', '')

def hash_password(password, salt):
    dk = hashlib.pbkdf2_hmac(
        'sha512',
        str(password or '').encode('utf-8'),
        salt.encode('utf-8'),
        120000,
        dklen=64
    )
    return binascii.hexlify(dk).decode('utf-8')

class UnifiedVLabHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        origin = self.headers.get('Origin', '*')
        self.send_header('Access-Control-Allow-Origin', origin)
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.js'):
            return 'application/javascript'
        if path.endswith('.css'):
            return 'text/css'
        return super().guess_type(path)

    def translate_path(self, path):
        # Decode URL path (resolves %20 etc.)
        decoded_path = urllib.parse.unquote(path)
        # Parse query parameters off
        parsed_url = urllib.parse.urlparse(decoded_path)
        url_path = parsed_url.path

        # Helper to secure path
        def secure_path(base_folder, rel_path):
            target = os.path.abspath(os.path.join(ROOT_DIR, base_folder, rel_path))
            safe_base = os.path.abspath(os.path.join(ROOT_DIR, base_folder))
            if not target.startswith(safe_base):
                return ""  # Invalid/LFI attempt
            return target

        # Map reference site paths to local laboratory folders
        if url_path.startswith('/Programming_Virtual_Lab/'):
            rel_path = url_path.replace('/Programming_Virtual_Lab/', '', 1)
            return secure_path(os.path.join('labs', 'coding'), rel_path)
        elif url_path.startswith('/Operating_System_Virtual_Lab/'):
            rel_path = url_path.replace('/Operating_System_Virtual_Lab/', '', 1)
            return secure_path(os.path.join('labs', 'os'), rel_path)
        elif url_path.startswith('/EEE_DELD_Virtual_Lab/'):
            rel_path = url_path.replace('/EEE_DELD_Virtual_Lab/', '', 1)
            return secure_path(os.path.join('labs', 'deld'), rel_path)
        elif url_path.startswith('/Assembly_Virtual_Lab/asm_backend_project/public/'):
            rel_path = url_path.replace('/Assembly_Virtual_Lab/asm_backend_project/public/', '', 1)
            return secure_path(os.path.join('labs', 'assembly'), rel_path)

        if url_path.startswith('/labs/'):
            # Serve from labs/
            rel = url_path.lstrip('/')
            return secure_path('', rel)
        else:
            # Serve from public/
            rel = url_path.lstrip('/')
            if not rel or rel == '':
                rel = 'index.html'
            return secure_path('public', rel)

    def send_json(self, status, data):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        response_bytes = json.dumps(data).encode('utf-8')
        self.send_header('Content-Length', str(len(response_bytes)))
        self.end_headers()
        self.wfile.write(response_bytes)

    def get_auth(self):
        auth_header = self.headers.get('Authorization', '')
        token = ''
        if auth_header.startswith('Bearer '):
            token = auth_header[7:]
        
        if not token:
            return None
        
        db = read_db()
        session = db.get('sessions', {}).get(token)
        if not session:
            return None
        
        roll = session.get('roll')
        user = db.get('users', {}).get(roll)
        if not user:
            return None
        
        return {"db": db, "token": token, "roll": roll, "user": user}

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        if path == '/api/me':
            auth = self.get_auth()
            if not auth:
                return self.send_json(401, {"ok": False, "message": "Unauthorized. Please login again."})
            
            roll = auth['roll']
            user_progress = auth['db'].get('progress', {}).get(roll, {})
            # Ensure the required sub-structures exist
            if 'assembly' not in user_progress:
                user_progress['assembly'] = {"progressStore": {}, "quizState": {}}
            if 'deld' not in user_progress:
                user_progress['deld'] = {}
            if 'os' not in user_progress:
                user_progress['os'] = {"completed": {}, "xp": 0}
            if 'coding' not in user_progress:
                user_progress['coding'] = []

            return self.send_json(200, {
                "ok": True,
                "user": {
                    "name": auth['user']['name'],
                    "roll": auth['user'].get('rollOriginal', roll)
                },
                "progress": user_progress
            })

        if path == '/api/modules':
            modules = []
            labs_dir = os.path.join(ROOT_DIR, 'labs')
            if os.path.exists(labs_dir):
                folders = os.listdir(labs_dir)
                
                if 'coding' in folders:
                    total_coding = 10
                    summary_path = os.path.join(labs_dir, 'coding', 'experiments_summary.json')
                    if os.path.exists(summary_path):
                        try:
                            with open(summary_path, 'r', encoding='utf-8') as sf:
                                total_coding = len(json.load(sf))
                        except Exception:
                            pass
                    modules.append({
                        "id": "coding",
                        "name": "Programming Lab",
                        "description": "Practice C, C++, Java, and Python with our integrated web compiler and standard experiments.",
                        "icon": "💻",
                        "color": "blue",
                        "url": "Programming_Virtual_Lab/index.html",
                        "totalTasks": total_coding
                    })
                
                if 'os' in folders:
                    total_os = 10
                    os_dir = os.path.join(labs_dir, 'os')
                    if os.path.exists(os_dir):
                        try:
                            os_files = os.listdir(os_dir)
                            exclude = {'index.html', 'login.html', 'register.html', 'admin-dashboard.html', 'teacher-dashboard.html', 'student-dashboard.html'}
                            os_labs = [f for f in os_files if f.endswith('.html') and f not in exclude]
                            total_os = len(os_labs)
                        except Exception:
                            pass
                    modules.append({
                        "id": "os",
                        "name": "Operating Systems Lab",
                        "description": "Interactive simulations of Page Replacement, Deadlock Avoidance, and Disk Scheduling Algorithms.",
                        "icon": "🖥️",
                        "color": "purple",
                        "url": "Operating_System_Virtual_Lab/index.html",
                        "totalTasks": total_os
                    })
                
                if 'deld' in folders:
                    modules.append({
                        "id": "deld",
                        "name": "EEE & DELD Lab",
                        "description": "Electrical circuits, machines, logic gates, multiplexers, and hardware measurements.",
                        "icon": "⚡",
                        "color": "green",
                        "url": "EEE_DELD_Virtual_Lab/index.html",
                        "totalTasks": 24
                    })
                
                if 'assembly' in folders:
                    modules.append({
                        "id": "assembly",
                        "name": "Assembly Lab",
                        "description": "Learn low-level system architecture and x86 Assembly instructions with a virtual 8086 emulator.",
                        "icon": "⚙️",
                        "color": "orange",
                        "url": "Assembly_Virtual_Lab/asm_backend_project/public/index.html",
                        "totalTasks": 8
                    })
            
            return self.send_json(200, {"ok": True, "modules": modules})

        # Static files serving
        super().do_GET()

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        # Parse request body
        content_length = int(self.headers.get('Content-Length', 0))
        body = {}
        if content_length > 0:
            try:
                body = json.loads(self.rfile.read(content_length).decode('utf-8'))
            except Exception:
                return self.send_json(400, {"ok": False, "message": "Invalid JSON body"})

        if path == '/api/register':
            name = str(body.get('name', '')).strip()
            roll = str(body.get('roll', '')).strip()
            password = str(body.get('password', ''))

            if not name:
                return self.send_json(400, {"ok": False, "message": "Full name is required."})
            if len(name) > 100:
                return self.send_json(400, {"ok": False, "message": "Full name is too long."})
            if not roll:
                return self.send_json(400, {"ok": False, "message": "Roll number is required."})
            if len(roll) > 50:
                return self.send_json(400, {"ok": False, "message": "Roll number is too long."})
            if len(password) < 6:
                return self.send_json(400, {"ok": False, "message": "Password must be at least 6 characters."})
            if len(password) > 200:
                return self.send_json(400, {"ok": False, "message": "Password is too long."})

            roll_key = normalize_roll(roll)
            db = read_db()
            if roll_key in db['users']:
                return self.send_json(409, {"ok": False, "message": "This roll number is already registered."})

            salt = uuid.uuid4().hex
            db['users'][roll_key] = {
                "name": name,
                "rollOriginal": roll,
                "salt": salt,
                "passwordHash": hash_password(password, salt),
                "createdAt": uuid.uuid4().hex # placeholder for timestamp format if desired
            }
            db['progress'][roll_key] = {
                "assembly": {"progressStore": {}, "quizState": {}},
                "deld": {},
                "os": {"completed": {}, "xp": 0},
                "coding": []
            }
            write_db(db)
            return self.send_json(200, {"ok": True, "message": "Account created successfully."})

        elif path == '/api/login':
            roll = body.get('roll', '')
            password = body.get('password', '')

            roll_key = normalize_roll(roll)
            db = read_db()
            user = db['users'].get(roll_key)

            if not user or hash_password(password, user['salt']) != user['passwordHash']:
                return self.send_json(401, {"ok": False, "message": "Invalid roll number or password."})

            token = uuid.uuid4().hex + uuid.uuid4().hex
            db['sessions'][token] = {
                "roll": roll_key,
                "createdAt": uuid.uuid4().hex
            }
            
            # Ensure progress structure exists
            if roll_key not in db['progress']:
                db['progress'][roll_key] = {}
            
            user_progress = db['progress'][roll_key]
            if 'assembly' not in user_progress:
                user_progress['assembly'] = {"progressStore": {}, "quizState": {}}
            if 'deld' not in user_progress:
                user_progress['deld'] = {}
            if 'os' not in user_progress:
                user_progress['os'] = {"completed": {}, "xp": 0}
            if 'coding' not in user_progress:
                user_progress['coding'] = []

            write_db(db)

            return self.send_json(200, {
                "ok": True,
                "token": token,
                "user": {
                    "name": user['name'],
                    "roll": user.get('rollOriginal', roll_key)
                },
                "progress": user_progress
            })

        elif path == '/api/progress':
            # Compatible with original Assembly progress API
            auth = self.get_auth()
            if not auth:
                return self.send_json(401, {"ok": False, "message": "Unauthorized. Please login again."})
            
            roll = auth['roll']
            progress_store = body.get('progressStore', {})
            quiz_state = body.get('quizState', {})

            db = auth['db']
            if roll not in db['progress']:
                db['progress'][roll] = {}
            
            db['progress'][roll]['assembly'] = {
                "progressStore": progress_store if isinstance(progress_store, dict) else {},
                "quizState": quiz_state if isinstance(quiz_state, dict) else {}
            }
            write_db(db)
            return self.send_json(200, {"ok": True, "progress": db['progress'][roll]})

        elif path == '/api/compile':
            # Proxies compilation request to Piston API
            try:
                req = urllib.request.Request(
                    "https://emkc.org/api/v2/piston/execute",
                    data=json.dumps(body).encode('utf-8'),
                    headers={
                        'Content-Type': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                        'Accept': 'application/json'
                    }
                )
                with urllib.request.urlopen(req) as response:
                    res_body = response.read()
                    self.send_response(response.status)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(res_body)
                    return
            except urllib.error.HTTPError as e:
                try:
                    res_body = e.read()
                    self.send_response(e.code)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(res_body)
                    return
                except Exception:
                    return self.send_json(e.code, {"ok": False, "message": "Compilation failed", "error": str(e)})
            except Exception as e:
                return self.send_json(500, {"ok": False, "message": "Internal Server Error", "error": str(e)})

        elif path == '/api/sync-progress':
            # Dynamic sync endpoint for other labs
            auth = self.get_auth()
            if not auth:
                return self.send_json(401, {"ok": False, "message": "Unauthorized. Please login again."})
            
            roll = auth['roll']
            db = auth['db']
            
            if roll not in db['progress']:
                db['progress'][roll] = {}
            
            # Sync DELD progress if provided
            if 'deld' in body:
                db['progress'][roll]['deld'] = body['deld']
            
            # Sync OS progress if provided
            if 'os' in body:
                db['progress'][roll]['os'] = body['os']
                
            # Sync Coding progress if provided
            if 'coding' in body:
                db['progress'][roll]['coding'] = body['coding']
                
            write_db(db)
            return self.send_json(200, {"ok": True, "progress": db['progress'][roll]})

        elif path == '/api/logout':
            auth = self.get_auth()
            if auth:
                db = auth['db']
                if auth['token'] in db.get('sessions', {}):
                    del db['sessions'][auth['token']]
                    write_db(db)
            return self.send_json(200, {"ok": True})

        else:
            return self.send_json(404, {"ok": False, "message": "API route not found."})

def run_server():
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, UnifiedVLabHandler)
    print(f"Unified Virtual Labs Server running at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        httpd.server_close()

if __name__ == '__main__':
    run_server()

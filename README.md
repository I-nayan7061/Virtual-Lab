# Unified Virtual Laboratories Platform (Exact Clone Replica)

An identical local mirror replicating the MIT ADT Virtual Labs Portal landing page (`https://internshipvlab.onrender.com/`), served on a zero-dependency local Python backend.

---

## 🏛️ Architecture Overview

The portal replicates the exact structure, alignment, text copy, fonts, animations, and color scheme of the reference site.

* **HTML Structure**: Serves the exact copy of the reference landing page from `public/index.html`.
* **CSS Stylesheet**: Implements the exact styles, Outfit font imports, glassmorphic header, grids, and glowing background animation blobs in `public/css/style.css`.
* **Zero-Dependency Server**: Uses a custom Python web server (`server.py`) to translate reference URL paths directly to our local laboratory directories:
  * `/Programming_Virtual_Lab/index.html` ➡️ maps to local path `/labs/coding/index.html`
  * `/Operating_System_Virtual_Lab/index.html` ➡️ maps to local path `/labs/os/index.html`
  * `/EEE_DELD_Virtual_Lab/index.html` ➡️ maps to local path `/labs/deld/index.html`
  * `/Assembly_Virtual_Lab/asm_backend_project/public/index.html` ➡️ maps to local path `/labs/assembly/index.html`

---

## 🚀 Steps to Run the Project

### Prerequisites
* **Python 3.x** installed.
* No external packages or installations (npm/pip) are required.

### Step 1: Start the Server
Open a terminal in this project root directory and run:
```bash
python server.py
```
The server will start listening on **Port 3000**.

### Step 2: Open the Portal
Open your web browser and navigate to:
```text
http://localhost:3000
```
This loads the identical clone landing page with the Outfit typography, dark theme, and animated background blobs.

### Step 3: Run the Labs
Click **Enter Lab** on any of the four laboratory cards to launch that specific simulator locally directly from your browser.

/* ==========================================
   UNIFIED PLATFORM — Core JavaScript
   Handles Authentication, SSO, and Cloud Sync
   ========================================== */

const API_BASE = '';
let currentUser = null;
let apiToken = localStorage.getItem('vlab_platform_token') || '';
window.vlabModules = []; // Store dynamic module config

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem('vlab_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('vlab_theme', newTheme);
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  }
}

// API request wrapper
async function apiFetch(path, options = {}) {
  const headers = Object.assign({ 'Content-Type': 'application/json' }, options.headers || {});
  if (apiToken) {
    headers.Authorization = 'Bearer ' + apiToken;
  }
  
  const res = await fetch(path, Object.assign({}, options, { headers }));
  
  // If the response is not OK at the HTTP level, throw immediately
  if (!res.ok) {
    let errorMsg = res.statusText || 'Request failed';
    try {
      const errorData = await res.json();
      if (errorData.message) errorMsg = errorData.message;
    } catch(e) {
      // It wasn't JSON, fallback to status text
    }
    throw new Error(errorMsg);
  }

  // Parse JSON for successful responses
  const data = await res.json();
  if (data.ok === false || data.ok === 'false') {
    throw new Error(data.message || 'Request failed');
  }
  return data;
}

// SSO: Inject credentials into expected keys for individual labs
function syncSSOKeys(user, token) {
  if (!user) return;
  
  // 1. Assembly Lab: Uses 'asmlab_api_token'
  localStorage.setItem('asmlab_api_token', token);
  
  // 2. EEE/DELD Lab: Uses 'eeeCurrentUser' (JSON string)
  const deldUser = {
    name: user.name,
    email: `${user.roll.toLowerCase()}@student.com`,
    enroll: user.roll
  };
  localStorage.setItem('eeeCurrentUser', JSON.stringify(deldUser));
  
  // 3. OS Lab: Uses 'username' and 'role'
  localStorage.setItem('username', user.name);
  localStorage.setItem('role', 'student');
}

// Clear SSO Credentials
function clearSSOKeys() {
  // Clear portal token
  localStorage.removeItem('vlab_platform_token');
  apiToken = '';
  currentUser = null;
  
  // Clear Assembly lab keys
  localStorage.removeItem('asmlab_api_token');
  
  // Clear DELD lab keys
  localStorage.removeItem('eeeCurrentUser');
  localStorage.removeItem('eeeProgress');
  localStorage.removeItem('eeeRegisteredUser');
  
  // Clear OS lab keys
  localStorage.removeItem('username');
  localStorage.removeItem('role');
  localStorage.removeItem('completed');
  localStorage.removeItem('xp');
  
  // Clear Coding lab keys
  localStorage.removeItem('codingProgress');
  localStorage.removeItem('vpl-feedback');
}

// Restore progress from server database back to browser localStorage
function restoreProgressToLocal(progress) {
  if (!progress) return;
  
  // 1. DELD Progress
  if (progress.deld && Object.keys(progress.deld).length > 0) {
    localStorage.setItem('eeeProgress', JSON.stringify(progress.deld));
  }
  
  // 2. OS Progress
  if (progress.os) {
    if (progress.os.completed) {
      localStorage.setItem('completed', JSON.stringify(progress.os.completed));
    }
    if (progress.os.xp !== undefined) {
      localStorage.setItem('xp', progress.os.xp);
    }
  }
  
  // 3. Coding Progress
  if (progress.coding && Array.isArray(progress.coding) && progress.coding.length > 0) {
    localStorage.setItem('vpl-feedback', JSON.stringify(progress.coding));
  }
}

// Get raw local progress data for sync
function getLocalProgressData() {
  let deld = {};
  try {
    deld = JSON.parse(localStorage.getItem('eeeProgress') || '{}');
  } catch(e) {}

  let osCompleted = {};
  try {
    osCompleted = JSON.parse(localStorage.getItem('completed') || '{}');
  } catch(e) {}
  
  let osXp = Number(localStorage.getItem('xp')) || 0;
  
  let coding = [];
  try {
    coding = JSON.parse(localStorage.getItem('vpl-feedback') || '[]');
  } catch(e) {}
  
  return {
    deld: deld,
    os: {
      completed: osCompleted,
      xp: osXp
    },
    coding: coding
  };
}

// Sync local progress to Server
async function syncProgressToServer() {
  if (!apiToken) return;
  try {
    const payload = getLocalProgressData();
    await apiFetch('/api/sync-progress', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  } catch (e) {
    console.error("Progress sync failed:", e);
  }
}

// Calculate and render progress indicators on the Dashboard
function updateDashboardStats(progressData = null) {
  let deldComp = 0;
  let asmComp = 0;
  let codingComp = 0;
  let osComp = 0;
  let osXp = 0;
  
  if (progressData) {
    // 1. DELD Stats
    const deldObj = progressData.deld || {};
    deldComp = Object.values(deldObj).filter(x => x.completed).length;
    
    // 2. Assembly Stats
    const asmStore = progressData.assembly?.progressStore || {};
    asmComp = Object.values(asmStore).filter(x => x && x.quizState?.completed || x && x.completed).length;
    // Fallback: search for keys in Assembly structure
    if (asmComp === 0) {
      asmComp = Object.keys(asmStore).length;
    }
    
    // 3. Coding Stats
    const codingArr = Array.isArray(progressData.coding) ? progressData.coding : [];
    codingComp = new Set(codingArr.map(x => x.experiment)).size;
    
    // 4. OS Stats
    const osObj = progressData.os || {};
    osComp = Object.keys(osObj.completed || {}).length;
    osXp = osObj.xp || 0;
  } else {
    // Retrieve from localStorage if not passed from server
    try {
      const deldObj = JSON.parse(localStorage.getItem('eeeProgress') || '{}');
      deldComp = Object.values(deldObj).filter(x => x.completed).length;
    } catch(e) {}
    
    try {
      const osCompletedObj = JSON.parse(localStorage.getItem('completed') || '{}');
      osComp = Object.keys(osCompletedObj).length;
    } catch(e) {}
    
    osXp = Number(localStorage.getItem('xp')) || 0;
    
    try {
      const codingArr = JSON.parse(localStorage.getItem('vpl-feedback') || '[]');
      const codingArrValid = Array.isArray(codingArr) ? codingArr : [];
      codingComp = new Set(codingArrValid.map(x => x.experiment)).size;
    } catch(e) {}
  }
  
  // Retrieve total tasks from dynamic API configuration
  const getModTotal = (id, fallback) => {
    const mod = window.vlabModules.find(m => m.id === id);
    return mod && mod.totalTasks ? mod.totalTasks : fallback;
  };

  const totalDeld = getModTotal('deld', 24);
  const totalAsm = getModTotal('assembly', 8);
  const totalCoding = getModTotal('coding', 10);
  const totalOs = getModTotal('os', 10);

  // Update UI Elements
  const deldPct = totalDeld > 0 ? Math.round((deldComp / totalDeld) * 100) : 0;
  const asmPct = totalAsm > 0 ? Math.round((asmComp / totalAsm) * 100) : 0;
  const codingPct = totalCoding > 0 ? Math.round((codingComp / totalCoding) * 100) : 0;
  const osPct = totalOs > 0 ? Math.round((osComp / totalOs) * 100) : 0;
  
  // overall percent
  const overallPct = Math.round((deldPct + asmPct + codingPct + osPct) / 4);
  
  // Set UI Text
  const elOverallText = document.getElementById('overall-percent-text');
  if (elOverallText) elOverallText.textContent = `${overallPct}%`;
  
  // Set Circle Offset
  const elCircleFill = document.getElementById('circle-fill');
  if (elCircleFill) {
    const r = 36;
    const circ = 2 * Math.PI * r; // ~226
    const offset = circ - (overallPct / 100) * circ;
    elCircleFill.style.strokeDashoffset = offset;
  }
  
  // Set Sub-Bars
  const barDeld = document.getElementById('bar-deld-fill');
  const txtDeld = document.getElementById('txt-deld-val');
  if (barDeld) barDeld.style.width = `${Math.min(deldPct, 100)}%`;
  if (txtDeld) txtDeld.textContent = `${deldComp}/${totalDeld}`;
  
  const barAsm = document.getElementById('bar-asm-fill');
  const txtAsm = document.getElementById('txt-asm-val');
  if (barAsm) barAsm.style.width = `${Math.min(asmPct, 100)}%`;
  if (txtAsm) txtAsm.textContent = `${asmComp}/${totalAsm}`;
  
  const barCoding = document.getElementById('bar-coding-fill');
  const txtCoding = document.getElementById('txt-coding-val');
  if (barCoding) barCoding.style.width = `${Math.min(codingPct, 100)}%`;
  if (txtCoding) txtCoding.textContent = `${codingComp}/${totalCoding}`;
  
  const barOs = document.getElementById('bar-os-fill');
  const txtOs = document.getElementById('txt-os-val');
  if (barOs) barOs.style.width = `${Math.min(osPct, 100)}%`;
  if (txtOs) txtOs.textContent = `${osXp} XP (${osComp}/${totalOs})`;

  // Update status tags on individual lab cards
  const badgeDeld = document.getElementById('card-badge-deld');
  if (badgeDeld) badgeDeld.textContent = deldPct === 100 ? 'Completed' : (deldPct > 0 ? `${deldPct}% Progress` : 'Not Started');
  
  const badgeAsm = document.getElementById('card-badge-asm');
  if (badgeAsm) badgeAsm.textContent = asmPct === 100 ? 'Completed' : (asmPct > 0 ? `${asmPct}% Progress` : 'Not Started');
  
  const badgeCoding = document.getElementById('card-badge-coding');
  if (badgeCoding) badgeCoding.textContent = codingPct === 100 ? 'Completed' : (codingPct > 0 ? `${codingPct}% Progress` : 'Not Started');
  
  const badgeOs = document.getElementById('card-badge-os');
  if (badgeOs) badgeOs.textContent = osPct === 100 ? 'Completed' : (osPct > 0 ? `${osPct}% Progress` : 'Not Started');
}

// User UI Dropdown setup
function setupUserMenu() {
  const trigger = document.getElementById('profile-trigger');
  const menu = document.getElementById('profile-menu');
  if (trigger && menu) {
    trigger.onclick = (e) => {
      e.stopPropagation();
      menu.classList.toggle('open');
    };
    
    document.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  }
}

// Bootstrap User Session
async function bootstrapSession() {
  initTheme();
  setupUserMenu();
  
  // Fetch dynamic modules config from backend
  try {
    const modData = await fetch('/api/modules').then(r => r.json());
    if (modData && modData.ok) {
      window.vlabModules = modData.modules;
      
      // Dynamically render homepage cards if grid exists
      const grid = document.getElementById('dynamic-labs-grid');
      const renderCards = (query = '') => {
        if (!grid || window.vlabModules.length === 0) return;
        const q = query.toLowerCase();
        const filtered = window.vlabModules.filter(mod => mod.name.toLowerCase().includes(q) || mod.description.toLowerCase().includes(q));
        grid.innerHTML = filtered.map(mod => `
          <a href="${mod.url}" class="lab-card glass">
            <div class="card-icon ${mod.color}">${mod.icon}</div>
            <div class="card-content">
                <h3>${mod.name}</h3>
                <p>${mod.description}</p>
            </div>
            <div class="card-footer">
                <span>Enter Lab</span>
                <span class="arrow">→</span>
            </div>
          </a>
        `).join('');
      };
      renderCards();
      
      const searchInput = document.getElementById('labSearch');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => renderCards(e.target.value));
      }
    }
  } catch (e) {
    console.error("Could not load modules config", e);
  }
  
  // Add real-time cross-tab sync listener
  window.addEventListener('storage', () => {
    updateDashboardStats();
    syncProgressToServer();
  });
  
  const authNav = document.getElementById('auth-nav-options');
  const profileMenu = document.getElementById('profile-menu');
  const usernameDisplay = document.getElementById('profile-username');
  const userRollDisplay = document.getElementById('profile-userroll');
  const guestBanner = document.getElementById('guest-banner');
  const dashboardGrid = document.getElementById('dashboard-grid');

  if (!apiToken) {
    // Guest Mode
    if (authNav) authNav.style.display = 'flex';
    if (profileMenu) profileMenu.style.display = 'none';
    if (guestBanner) guestBanner.style.display = 'block';
    if (dashboardGrid) dashboardGrid.style.display = 'none';
    updateDashboardStats(); // Load from local storage
    return;
  }
  
  try {
    const data = await apiFetch('/api/me');
    currentUser = data.user;
    
    // Sync keys down to local storage
    syncSSOKeys(currentUser, apiToken);
    restoreProgressToLocal(data.progress);
    
    // Update UI
    if (authNav) authNav.style.display = 'none';
    if (profileMenu) profileMenu.style.display = 'flex';
    if (usernameDisplay) usernameDisplay.textContent = currentUser.name;
    if (userRollDisplay) userRollDisplay.textContent = currentUser.roll;
    
    if (guestBanner) guestBanner.style.display = 'none';
    if (dashboardGrid) dashboardGrid.style.display = 'grid';
    
    updateDashboardStats(data.progress);
  } catch (e) {
    console.error("Session verification failed. Clearing credentials.", e);
    clearSSOKeys();
    if (authNav) authNav.style.display = 'flex';
    if (profileMenu) profileMenu.style.display = 'none';
    if (guestBanner) guestBanner.style.display = 'block';
    if (dashboardGrid) dashboardGrid.style.display = 'none';
    updateDashboardStats();
  }
}

// Logout
async function doLogout() {
  try {
    await apiFetch('/api/logout', { method: 'POST' });
  } catch(e) {}
  clearSSOKeys();
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', bootstrapSession);

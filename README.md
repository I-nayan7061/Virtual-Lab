# Unified Virtual Laboratories Platform

A comprehensive Virtual Labs Portal featuring multiple interactive computer science laboratories, served on a zero-dependency local Python backend.

---

## 🏛️ Architecture Overview

The portal integrates various specialized laboratory simulators with a modern interface, custom fonts, animations, and a cohesive dark-themed color scheme.

* **HTML Structure**: Serves the main dashboard and landing page from `public/index.html`.
* **CSS Stylesheet**: Implements modern UI styles, Outfit font imports, glassmorphic headers, grids, and glowing background animation blobs in `public/css/style.css`.
* **Zero-Dependency Server**: Uses a custom Python web server (`server.py`) to map frontend URL paths directly to our local laboratory directories:
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
This loads the main landing page with the Outfit typography, dark theme, and animated background blobs.

### Step 3: Run the Labs
Click **Enter Lab** on any of the four laboratory cards to launch that specific simulator locally directly from your browser.

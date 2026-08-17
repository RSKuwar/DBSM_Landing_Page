# Don Bosco Skill Mission (DBSM) — Premium Interactive Web Platform

A state-of-the-art, high-performance web platform built for **Don Bosco Skill Mission (DBSM) Bengaluru**, a 75,000+ sq. ft. skill and innovation campus. Featuring cinematic WebP frame scrubbing, bidirectional scroll-driven animations, an interactive horizontal faculty profile track, course quick info modals, and responsive mobile adaptation.

---

## 🌐 Live Access

- **Live Site (GitHub Pages)**: [https://rskuwar.github.io/DBSM_Landing_Page/](https://rskuwar.github.io/DBSM_Landing_Page/)
- **GitHub Repository**: [https://github.com/RSKuwar/DBSM_Landing_Page](https://github.com/RSKuwar/DBSM_Landing_Page)

---

## 🏗️ System Architecture & Key Features

```
               +-------------------------------------------------------+
               |                  Vite / Vanilla JS                    |
               +-------------------------------------------------------+
                                           |
    +-----------------------+--------------+--------------+-----------------------+
    |                       |                             |                       |
    v                       v                             v                       v
+------------------+  +-------------------------+   +-------------------+   +--------------------+
| WebP Canvas Hero |  | Bidirectional Motion Engine| | Horizontal Faculty|   | Quick Info Modals  |
| 120 Smooth Frames|  | IntersectionObserver    |   | 7 Profile Cards   |   | EV, AWS, DCOM, GSA |
+------------------+  +-------------------------+   +-------------------+   +--------------------+
```

### 1. WebP Frame Scrubbing Hero Canvas Engine
- Replaced standard video tags with a preloaded **120-frame WebP canvas scrubbing engine** (`dbsm-001.webp` to `dbsm-120.webp`).
- Tied frame-by-frame rendering directly to vertical scroll progress at 60fps for ultra-smooth drone entry playback without browser video scrubbing lag.

### 2. Bidirectional Scroll Animation System
- **Scroll-Down & Scroll-Up Response**: Content elements (`.scroll-reveal`, `.reveal-scale`, `.reveal-left`, `.stagger-*`) dynamically transition into view on scroll-down and gracefully return to their initial state on scroll-up.
- **Animated Numerical Counters**: Statistics grid dynamically counts up numbers (`75,000+ Sq. Ft.`, `100% Practical Labs`, `4 Centers of Excellence`, `5,000+ Skilled Graduates`) when scrolled into view.

### 3. Faculty & Leadership Horizontal Track
- Uses page scroll height to smoothly translate the faculty track horizontally across desktop viewports.
- Features focal detection logic (`.is-focused`) to highlight active profile cards cleanly while dimming adjacent cards.
- On touch devices (`≤ 768px`), automatically switches to native touch horizontal scroll-snap to prevent scroll trapping.

### 4. Faculty & Leadership Roster
1. **Fr. Eugene Florence** — *Director*
2. **Bro. Barnabas Khriam** — *Assistant Director, Center Head*
3. **Fr. Britto Francis** — *Assistant Director, Center Head*
4. **YOGARATHNAM S** — *Trainer- Cloud computing*
5. **ASHA S NAIK** — *Trainer- Electric Vehicle*
6. **Norbert Sunn** — *Trainer- GSA*
7. **Thomas Rosariyo** — *Accountant*

---

## 🛠️ Technology Stack

- **Core**: HTML5, Vanilla JavaScript (ES6 Modules)
- **Styling**: Modern CSS3 (Variables, Flexbox, Grid, Glassmorphism, CSS Transitions)
- **Build Tool**: Vite v8.2
- **Deployment**: GitHub Pages (`gh-pages` automated branch distribution)

---

## 💻 Local Development Setup

### 1. Clone Repository
```bash
git clone https://github.com/RSKuwar/DBSM_Landing_Page.git
cd DBSM_Landing_Page
```

### 2. Install Dependencies & Start Dev Server
```bash
npm install
npm run dev
```
Open `http://localhost:5173/` (or `http://localhost:5174/DBSM_Landing_Page/`) in your web browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📄 License
© 2026 Don Bosco Skill Mission (DBSM) Bengaluru. All Rights Reserved.

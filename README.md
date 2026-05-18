# Chetan Tomar - Full Stack Software Developer Portfolio

Welcome to my updated, premium full-stack developer portfolio built with the **MERN** stack (React.js, Node.js + Express, and a secure local database).

## 🚀 Key Upgrades
1. **Modern React.js Frontend**: Scaffolded with Vite for high-performance reloading, modular code structure, and lightning-fast user interactions.
2. **Robust Node.js & Express Backend**: Form validation, error handling, and persistent contact message tracking.
3. **Premium Glassmorphism Design System**: Sleek glass panels, animated interactive skill gauges, and smooth scroll effects.
4. **Stunning Micro-Animations**: Staggered component reveals and fluid transitions powered by `framer-motion`.
5. **Secure Admin Dashboard**: Slide-out dashboard protected by passcode (`admin123`) to read, manage, and toggle contact message statuses in real time.
6. **Concurrent Management**: Single-command workspace launcher to run both client and server simultaneously.

---

## 📁 Folder Structure
```bash
chetan/
├── client/              # React.js Frontend (Vite)
│   ├── public/          # Static assets & profile images
│   ├── src/             # Frontend source code
│   │   ├── components/  # Modular page components (Navbar, Hero, About, etc.)
│   │   ├── App.jsx      # Core page assembler & state manager
│   │   ├── index.css    # Premium CSS design tokens & animations
│   │   └── main.jsx     # Frontend entrypoint
│   └── package.json
│
├── server/              # Node.js + Express Backend
│   ├── data/            # Local JSON database for contact forms
│   │   └── messages.json
│   ├── server.js        # Express application API routes & server logic
│   └── package.json
│
├── legacy/              # Backup of old HTML/CSS/JS files
├── package.json         # Workspace master package configuration
└── README.md            # Project guide
```

---

## 🛠️ How to Run the Project

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Quick Start (Concurrently)
You can start both the **React frontend** and **Express backend** at the same time using a single command from the root folder:

```bash
# Run both servers concurrently
npm run dev
```

* **Frontend Dev Server**: [http://localhost:5173/](http://localhost:5173/)
* **Backend API Server**: [http://localhost:5000/](http://localhost:5000/)

---

### 2. Manual Start

#### Start Backend Only
```bash
cd server
npm run dev
```

#### Start Frontend Only
```bash
cd client
npm run dev
```

---

## 🔐 Admin Dashboard Passcode
Click on the **Shield Icon** in the top right corner of the navigation bar to open the Admin Panel drawer.
* **Passcode**: `admin123`

This will authorize you to securely fetch, read, and flag messages sent from the Contact form on your portfolio!

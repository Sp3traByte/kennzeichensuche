<p align="right">
  <img src="icons/sp3ctrabyte-logo.png" width="120" alt="Sp3traByte Logo">
</p>

# License Plate Lookup – PWA

*A fast, offline-capable license plate search app by **Sp3traByte***  

---

A lightweight, mobile-first web app for searching **German vehicle license plate codes** (Kfz-Kennzeichen) and **international country codes**.  
The app is built as a **Progressive Web App (PWA)**, so it can be installed on Android, iOS and desktop and works offline after the first load.

---

## 🚀 Features

### 🇩🇪 German License Plate Search
- Full list of German license plate prefixes  
- Shows **city**, **district/county**, and **federal state**  
- Smart search across multiple fields (code, city, state)

### 🌍 International Country Code Search
- Database of international vehicle country codes  
- Supports searching by:
  - Code (e.g. `D`, `F`, `NL`, `J`, `USA`)
  - Country name (e.g. *Germany*, *France*, *Japan*)

### 🔍 Smart Search (Fuse.js)
- Fast fuzzy search engine  
- Tolerates typos  
- Highlights matches  
- Shows live suggestions while typing

### ⭐ Favorites & History
- Save codes as **favorites** (local storage)  
- Automatic **search history**  
- No user account and no tracking

### 📱 Progressive Web App (PWA)
- Installable on **Android**, **iOS**, **Windows**, **Linux**  
- Works **offline** after first load  
- Service Worker caches HTML, JSON, icons, scripts  
- Custom app logo (Sp3traByte icon)

### 🎨 Modern UI
- Dark-theme-optimized  
- Smooth intro animation  
- Clean card layout  
- "Open in Google Maps" button

---

## 📂 Project Structure

```text
/
│── index.html          # App UI + main logic
│── daten.json          # All license plate and country data
│── sw.js               # Service Worker for offline mode
│── manifest.json       # PWA configuration
│
└── icons/
    └── sp3ctrabyte-logo.png   # App icon shown in README + PWA

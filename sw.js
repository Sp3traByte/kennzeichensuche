const CACHE_NAME = 'kennzeichen-cache-v3';

// WICHTIG: relative Pfade (keine führenden "/")
const ASSETS = [
  'index.html',
  'daten.json',
  'manifest.json',
  'icons/icon.png'
];

// Install: vorkacheln
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activate: alte Caches aufräumen
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

// Fetch: Stale-While-Revalidate (schnell + aktualisierbar)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return resp;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
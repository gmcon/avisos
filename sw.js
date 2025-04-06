const CACHE_NAME = 'avisos-cache-v6';  // Cambiar versión aquí
const FILES_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './avisos.js',
  './avisos.json',
  './manifest.json',
  './icon.png',
  './icon512.png'
];

self.addEventListener('install', event => {
  console.log('Service Worker instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting(); // Activa inmediatamente este SW
});

self.addEventListener('activate', event => {
  console.log('Service Worker activado');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Borrando caché antigua:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  return self.clients.claim(); // Toma control sin necesidad de recargar
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});

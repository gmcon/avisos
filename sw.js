const CACHE_NAME = "avisos-cache-v3";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/avisos.js",
  "/avisos.json",
  "/manifest.json",
  "/icon.png",
  "/icon512.png"
];

// Instalar el Service Worker y guardar archivos en caché
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar el Service Worker y limpiar cachés viejas
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

// Interceptar solicitudes
self.addEventListener("fetch", event => {
  if (event.request.url.endsWith("avisos.json")) {
    // Siempre ir al servidor por avisos.json
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Si responde bien, actualiza la caché
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => caches.match(event.request)) // Si está offline, usa la caché
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});

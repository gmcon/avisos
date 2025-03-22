self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('avisos-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './avisos.js',
        './avisos.json',
        './manifest.json',
        './icon.png',
        './icon512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});

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

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('avisos-cache-v2').then(cache => {
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


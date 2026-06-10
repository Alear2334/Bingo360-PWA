const CACHE_NAME = 'bingo360-v1';
const urlsToCache = ['/', '/static/css/estilos.css']; // Puedes añadir más archivos si quieres

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});
const CACHE_NAME = 'mon-francais-v1';
const ASSETS = ['/', '/FrenchLearningApp/', '/FrenchLearningApp/index.html'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});

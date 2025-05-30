const cacheName = 'hospital-distance-v1';
const staticAssets = [
    './',
    './index.html',
    './style.css', // If you create a separate CSS file
    './manifest.json',
    // Add any other static assets your app needs
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(response => {
        return response || fetch(event.request);
    }));
});
importScripts('serviceworker-cache-polyfill.js');

var assets = [
    '/',
    'index.html',
    'asset/jquery-3.0.0.min.js',
    'asset/materialize.min.js',
    'asset/materialize.min.css',
    'fonts/roboto/Roboto-Regular.ttf',
    'fonts/roboto/Roboto-Regular.woff2',
    'asset/sample-1.jpg',
    'fonts/roboto/Roboto-Light.woff2'
];

self.addEventListener('install', (e) => {
    console.log("Installed");
    e.waitUntil(
        caches.open('demo').then((cache) => {
            return cache.addAll(assets);
        }).then(() => {
            console.log("All the files are cached.");
        })
    );
});


self.addEventListener("activate", (event) => {
    console.log("Activated");
    event.waitUntil(
        caches.keys()
        .then((allCaches) => {
            allCaches.map((cacheName) => {
                if (cacheName !== 'demo') {
                    console.log("Delete cache. " + cacheName);
                    return caches.delete(cacheName);
                }
            });
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

importScripts('node_modules/sw-toolbox/sw-toolbox.js');
importScripts('asset/localforage.js');

toolbox.options.debug = true;

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) =>  {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('sync', (event) => {

    if (event.tag == 'loadApi') {
        console.log("Starting Fetch API");
        event.waitUntil(fetchApi(event));
    }
});

function fetchApi(event) {
    fetch(new Request("/api.php", { cache: "no-store" }))
        .then((response) => {
            console.log("Fetch API Finished");
            if (response.status == 200) {
                response.text().then((response) => {
                    self.registration.showNotification("Data is Fetched", {
                        body: 'Data is already loaded.',
                        tag: 'demo',
                        icon: 'asset/gdg_icon.png'
                    });
                    localforage.setItem('api', response, (err) => {
                        if (err) {
                            console.log("Err:", err);
                        }
                    });
                    return;
                });
            } else {
                throw new Error("" + response.status + " " + response.statusText);
            }
        })
}

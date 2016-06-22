self.addEventListener('install', (e) => {
    console.log("Install");
});


self.addEventListener("activate", (event) => {
    console.log("Activate");
});

self.addEventListener('push', (event) => {
    console.log('Push message received', event);
    var title = 'GDGThailand';
    event.waitUntil(
    self.registration.showNotification(title, {
        body: 'GDGThailand Facebook is Update Check it Out.',
        tag: 'demo',
        icon: 'asset/gdg_icon.png'
    }));
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    var url = 'https://facebook.com/GDGThailand/';
    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
        .then((windowClients) => {
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});

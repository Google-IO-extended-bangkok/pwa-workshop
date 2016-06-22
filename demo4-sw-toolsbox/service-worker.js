importScripts('node_modules/sw-toolbox/sw-toolbox.js');

toolbox.precache(['/','/index.html', 'asset/jquery-3.0.0.min.js','asset/materialize.min.css','asset/materialize.min.js']);

toolbox.options.debug = true;

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

toolbox.router.get('/index.html', toolbox.fastest);
toolbox.router.get('/asset/*.css', toolbox.fastest);
toolbox.router.get('/asset/*.js', toolbox.fastest);
toolbox.router.get('/asset/*.png', toolbox.fastest);
toolbox.router.get('/asset/*.png', toolbox.fastest);
toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/api(.*)', toolbox.fastest);


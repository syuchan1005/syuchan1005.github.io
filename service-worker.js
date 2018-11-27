importScripts("/precache-manifest.bf503051db9a68a03b5c49b2ab89bfc6.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "syuchan1005.github.io"});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});


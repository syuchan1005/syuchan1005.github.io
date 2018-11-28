importScripts("/precache-manifest.2426b0d83b5f4af48a2d2cbb344fd187.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "syuchan1005.github.io"});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});


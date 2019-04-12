importScripts("/precache-manifest.d6e4ff17276bf180427d1ac57a45658e.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* global self, workbox */
/* eslint-env serviceworker */
/* eslint no-underscore-dangle: ['error', { 'allow': ['__precacheManifest'] } ] */
/* eslint-disable no-restricted-globals */

workbox.core.setCacheNameDetails({ prefix: 'syuchan1005.github.io' });

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});


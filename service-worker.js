importScripts("/precache-manifest.154cd0e63eb04441725c4a136e5c5f83.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* global self, workbox */
/* eslint-env serviceworker */
/* eslint no-underscore-dangle: ['error', { 'allow': ['__precacheManifest'] } ] */
/* eslint-disable no-restricted-globals */

workbox.core.setCacheNameDetails({ prefix: 'syuchan1005.github.io' });

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


importScripts("/precache-manifest.5d168b4b82f7155e20642b89c0756f25.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* global self, workbox */
/* eslint-env serviceworker */
/* eslint no-underscore-dangle: ['error', { 'allow': ['__precacheManifest'] } ] */
/* eslint-disable no-restricted-globals */

workbox.core.setCacheNameDetails({ prefix: 'syuchan1005.github.io' });

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


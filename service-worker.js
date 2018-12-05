importScripts("/precache-manifest.7daf038973841c593b0a4333dd8b1a83.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* global self, workbox */
/* eslint-env serviceworker */
/* eslint no-underscore-dangle: ['error', { 'allow': ['__precacheManifest'] } ] */
/* eslint-disable no-restricted-globals */

workbox.core.setCacheNameDetails({ prefix: 'syuchan1005.github.io' });

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


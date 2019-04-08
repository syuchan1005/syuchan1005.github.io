/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  const isUpdateAvailable = Symbol('isUpdateAvailable');
  window.isUpdateAvailable = new Promise((resolve) => {
    window[isUpdateAvailable] = (reg) => {
      reg.update();
      resolve(navigator.serviceWorker.controller != null);
    };
  });
  register(`${process.env.BASE_URL}service-worker.js`, {
    updatefound(reg) {
      window[isUpdateAvailable](reg);
    },
  });
}

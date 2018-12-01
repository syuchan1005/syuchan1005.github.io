/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  window.isUpdateAvailable = new Promise((resolve) => {
    register(`${process.env.BASE_URL}service-worker.js`, {
      updatefound(reg) {
        const installingWorker = reg.installing;
        installingWorker.onstatechange = () => {
          switch (installingWorker.state) {
            case 'installed':
              resolve(!!navigator.serviceWorker.controller);
              break;
            default:
              resolve(false);
          }
        };
      },
    });
  });
}

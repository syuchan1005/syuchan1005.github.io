import '@fortawesome/fontawesome-free/css/all.css';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueAnalytics from 'vue-analytics';

import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store';
import messages from './i18n';

if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule) {
  CSS.paintWorklet.addModule('js/backgroundPainter.js');
}

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VueAnalytics, {
  id: 'UA-82930525-4',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production',
  },
});

new Vue({
  i18n: new VueI18n({
    locale: 'ja',
    messages,
  }),
  router,
  store,
  render: h => h(App),
}).$mount('#app');

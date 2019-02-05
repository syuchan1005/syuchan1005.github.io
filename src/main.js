import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import VueI18n from 'vue-i18n';

import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store';
import messages from './i18n';

if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule) {
  CSS.paintWorklet.addModule('/painters/BackgroundPainter.js');
}

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = false;

Vue.use(VueI18n);

new Vue({
  i18n: new VueI18n({
    locale: 'ja',
    messages,
  }),
  router,
  store,
  render: h => h(App),
}).$mount('#app');

import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';

import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store';

if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule) {
  CSS.paintWorklet.addModule('/painters/BackgroundPainter.js');
}

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

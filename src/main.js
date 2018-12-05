import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';

import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule) {
  CSS.paintWorklet.addModule('/painters/BackgroundPainter.js');
}

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

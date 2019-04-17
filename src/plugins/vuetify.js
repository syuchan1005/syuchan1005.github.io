import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: {
    send: 'fas fa-paper-plane',
    home: 'fas fa-home',
    list: 'fas fa-list',
    timeline: 'fas fa-chart-line',
    settings: 'fas fa-cog',
  },
});

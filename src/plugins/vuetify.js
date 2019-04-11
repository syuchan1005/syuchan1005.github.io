import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: {
    mail: 'fas fa-envelope',
    contacts: 'fas fa-pager',
    send: 'fas fa-paper-plane',
    open_in_new: 'fas fa-external-link-alt',
    home: 'fas fa-home',
    list: 'fas fa-list',
    timeline: 'fas fa-chart-line',
    settings: 'fas fa-cog',
  },
});

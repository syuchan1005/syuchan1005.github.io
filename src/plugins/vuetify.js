import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
    values: {
      send: 'fas fa-paper-plane',
      home: 'fas fa-home',
      list: 'fas fa-list',
      timeline: 'fas fa-chart-line',
      settings: 'fas fa-cog',
      invert_colors: 'fas fa-tint',
      language: 'fas fa-globe',
    },
  },
});

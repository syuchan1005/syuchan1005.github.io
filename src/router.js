import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
      },
    },
  ],
});

Vue.use(Router);

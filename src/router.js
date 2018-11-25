import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Productions from './views/Productions.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: Home.name,
      component: Home,
    },
    {
      path: '/productions',
      name: Productions.name,
      component: Productions,
    },
  ],
});

Vue.use(Router);

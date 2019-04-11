import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: 'home',webpackPreload: true */ './views/Home.vue');
const Productions = () => import(/* webpackChunkName: 'production',webpackPreload: true */ './views/Productions.vue');
const Histories = () => import(/* webpackChunkName: 'history',webpackPreload: true */ './views/Histories.vue');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/productions',
      name: 'productions',
      component: Productions,
    },
    {
      path: '/histories',
      name: 'histories',
      component: Histories,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

Vue.use(Router);

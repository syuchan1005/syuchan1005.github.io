import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

const AsyncProductions = () => import(/* webpackChunkName: 'production',webpackPreload: true */ './views/Productions.vue');
const AsyncHistories = () => import(/* webpackChunkName: 'history',webpackPreload: true */ './views/Histories.vue');

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
      component: AsyncProductions,
    },
    {
      path: '/histories',
      name: 'histories',
      component: AsyncHistories,
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

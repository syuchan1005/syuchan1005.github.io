/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appMounted: false,
  },
  mutations: {
    appMounted(state, val) {
      state.appMounted = val;
    },
  },
});

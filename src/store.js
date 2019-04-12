/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const setDarkMode = (val) => {
  document.body.style.backgroundColor = val ? '#303030' : '#FAFAFA';
};

const store = new Vuex.Store({
  state: {
    darkMode: false,
  },
  mutations: {
    darkMode(state, val) {
      state.darkMode = val;

      setDarkMode(val);
    },
  },
});

export const applyDarkMode = () => setDarkMode(store.state.darkMode);

export default store;

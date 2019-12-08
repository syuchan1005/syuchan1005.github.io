/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const colorTypes = ['auto', 'light', 'dark'];
if (!window.matchMedia) {
  colorTypes.shift();
}
export const COLOR_TYPES = colorTypes;

const setDarkMode = (isDark) => {
  document.body.style.backgroundColor = isDark ? '#303030' : '#FAFAFA';
};

const colorSchemes = {
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
};

const darkModeListener = (e) => {
  if (!e || !e.matches) return;
  Object.entries(colorSchemes)
    .some(([key, val]) => {
      if (e.media === val) {
        /* eslint-disable no-use-before-define */
        store.state.darkMode = key === 'dark';
        setDarkMode(store.state.darkMode);
        return true;
      }
      return false;
    });
};

let darkModeMatches = [];

export const applyColorType = () => {
  darkModeMatches.forEach((m) => m.removeListener(darkModeListener));
  darkModeMatches = [];

  /* eslint-disable no-use-before-define */
  if (store.state.colorType === 'auto') {
    if (window.matchMedia) {
      Object.values(colorSchemes)
        .forEach((colorScheme) => {
          const m = window.matchMedia(colorScheme);
          m.addListener(darkModeListener);
          darkModeMatches.push(m);
          darkModeListener(m);
        });
    }
  } else {
    store.state.darkMode = store.state.colorType === 'dark';
  }

  setDarkMode(store.state.darkMode);
};

const store = new Vuex.Store({
  state: {
    darkMode: false,
    colorType: 'auto',
  },
  mutations: {
    colorType(state, val) {
      if (state.colorType === val) return;
      state.colorType = val;

      applyColorType();
    },
  },
});

export default store;

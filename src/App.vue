<template>
  <v-app>
    <v-app-bar app class="app-header" color="green lighten-1" fixed dark
               :class="{ smAndDown: $vuetify.breakpoint.smAndDown}">
      <v-toolbar-title class="headline text-uppercase">
        syuchan1005<span style="text-transform:none">'s</span> Portfolio
      </v-toolbar-title>

      <v-spacer/>

      <v-menu bottom left :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" aria-label="settings">
            <v-icon>{{ $vuetify.icons.values.settings }}</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-select v-model="colorType" :items="colors"
                        label="color" :prepend-icon="$vuetify.icons.values.invert_colors"/>
            </v-list-item>
            <v-list-item>
              <v-select v-model="$i18n.locale" hide-details
                        :items="languages" item-text="name" item-value="locale"
                        label="language" :prepend-icon="$vuetify.icons.values.language"/>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main class="app-content" :class="{ smAndDown: $vuetify.breakpoint.smAndDown}">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </v-main>

    <v-bottom-navigation app grow class="app-footer" fixed v-model="bottomNav">
      <template v-for="item in navItems">
        <v-btn v-if="item.text" :key="item.path" text style="height: inherit"
               :color="item.color" :value="item.path" class="app-footer-button">
          <span>{{ item.text }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <v-btn v-else v-show="false" :key="item.path" :value="item.path" />
      </template>
    </v-bottom-navigation>

    <v-snackbar v-model="showReloadAlert" bottom :timeout="-1" color="error">
      <div>{{ $t('app.reloadAlert') }}</div>
      <v-btn outlined @click="locationReload(true)">
        {{ $t('app.reload') }}
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { applyColorType, COLOR_TYPES } from './store';

export default {
  name: 'App',
  data() {
    return {
      navItems: [
        { path: '/' },
        {
          path: '/productions',
          text: 'Productions',
          icon: this.$vuetify.icons.values.list,
          color: 'orange',
        },
        {
          path: '/home',
          text: 'Home',
          icon: this.$vuetify.icons.values.home,
          color: 'blue',
        },
        {
          path: '/histories',
          text: 'History',
          icon: this.$vuetify.icons.values.timeline,
          color: 'green',
        },
      ],
      showReloadAlert: false,
    };
  },
  computed: {
    bottomNav: {
      get() {
        return this.$route.path;
      },
      set(val) {
        this.$router.push(val);
      },
    },
    darkMode() {
      return this.$store.state.darkMode;
    },
    colorType: {
      get() {
        return this.$store.state.colorType;
      },
      set(val) {
        this.$store.commit('colorType', val);
      },
    },
    colors() {
      return COLOR_TYPES;
    },
    languages() {
      return this.$i18n.availableLocales
        .map((locale) => ({
          locale,
          name: this.$t('name', locale),
        }));
    },
  },
  watch: {
    darkMode(val) {
      this.$vuetify.theme.dark = val;
    },
  },
  mounted() {
    applyColorType();

    if (window.isUpdateAvailable) {
      window.isUpdateAvailable.then((available) => {
        this.showReloadAlert = available;
      });
    }
  },
  methods: {
    locationReload: (val) => window.location.reload(val),
  },
};
</script>

<!--suppress CssOverwrittenProperties, CssInvalidFunction -->
<style lang="scss">
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .v-list__group__items--no-action .v-list__tile {
    padding-left: 32px;
  }

  .app-header {
    padding-top: constant(safe-area-inset-top) !important;
    padding-top: env(safe-area-inset-top) !important;
    height: calc(64px + constant(safe-area-inset-top)) !important;
    height: calc(64px + env(safe-area-inset-top)) !important;

    &.smAndDown {
      height: calc(56px + constant(safe-area-inset-top)) !important;
      height: calc(56px + env(safe-area-inset-top)) !important;
    }
  }

  .app-content {
    padding-top: calc(64px + constant(safe-area-inset-top)) !important;
    padding-top: calc(64px + env(safe-area-inset-top)) !important;
    padding-bottom: calc(56px + constant(safe-area-inset-bottom)) !important;
    padding-bottom: calc(56px + env(safe-area-inset-bottom)) !important;
    padding-left: constant(safe-area-inset-left) !important;
    padding-left: env(safe-area-inset-left) !important;
    padding-right: constant(safe-area-inset-right) !important;
    padding-right: env(safe-area-inset-right) !important;

    &.smAndDown {
      padding-top: calc(56px + constant(safe-area-inset-top)) !important;
      padding-top: calc(56px + env(safe-area-inset-top)) !important;
    }
  }

  .app-footer {
    height: calc(56px + constant(safe-area-inset-bottom)) !important;
    height: calc(56px + env(safe-area-inset-bottom)) !important;
  }

  .app-footer-button .v-btn__content {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>

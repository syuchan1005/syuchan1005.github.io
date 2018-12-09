<template>
  <v-app>
    <v-toolbar app class="app-header" color="green lighten-1" fixed dark
               :class="{ smAndDown: $vuetify.breakpoint.smAndDown}">
      <v-toolbar-title class="headline text-uppercase">
        syuchan1005's Portfolio
      </v-toolbar-title>
    </v-toolbar>

    <v-content class="app-content" :class="{ smAndDown: $vuetify.breakpoint.smAndDown}">
      <router-view/>
    </v-content>

    <v-bottom-nav app class="app-footer" fixed dark
                  :value="true" :active.sync="bottomNav" v-if="appMounted">
      <v-btn v-for="item in navItems" :key="item.path"
             :color="item.color" :value="item.path" flat>
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>

    <div class="alert">
      <v-alert :value="showReloadAlert" type="warning" dismissible>
        <div>新しいアップデートがあります! リロードして更新して下さい.</div>
        <v-btn color="primary" round block @click="locationReload(true)">Reload</v-btn>
      </v-alert>
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      navItems: [
        {
          path: '/',
          text: 'Home',
          icon: 'home',
          color: 'blue',
        },
        {
          path: '/productions',
          text: 'Productions',
          icon: 'dns',
          color: 'orange',
        },
      ],
      showReloadAlert: false,
    };
  },
  computed: {
    ...mapState(['appMounted']),
    bottomNav: {
      get() {
        return this.$route.path;
      },
      set(val) {
        this.$router.push(val);
      },
    },
  },
  mounted() {
    if (window.isUpdateAvailable) { // PWA用の更新処理
      window.isUpdateAvailable.then((available) => {
        this.showReloadAlert = available;
      });
    }
    this.$nextTick(() => {
      this.$store.commit('appMounted', true);
    });
  },
  methods: {
    locationReload: val => window.location.reload(val),
  },
};
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>

<!--suppress CssOverwrittenProperties, CssInvalidFunction -->
<style lang="scss" scoped>
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
    height: auto !important;
    padding-bottom: constant(safe-area-inset-bottom) !important;
    padding-bottom: env(safe-area-inset-bottom) !important;
  }

  .alert {
    z-index: 10;
    width: 100%;
    position: fixed;
    bottom: 0;

    .v-alert:last-child {
      margin-bottom: 0;
    }
  }
</style>

<template>
  <v-app :dark="darkMode">
    <v-toolbar app class="app-header" color="green lighten-1" fixed dark
               :class="{ smAndDown: $vuetify.breakpoint.smAndDown}">
      <v-toolbar-title class="headline text-uppercase">
        syuchan1005<span style="text-transform:none">'s</span> Portfolio
      </v-toolbar-title>

      <v-spacer/>

      <v-menu bottom left :close-on-content-click="false">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" aria-label="settings">
            <v-icon>{{ $vuetify.icons.settings }}</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="darkMode"/>
            </v-list-tile-action>
            <v-list-tile-title>DarkMode</v-list-tile-title>
          </v-list-tile>
          <v-divider/>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Language</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-menu>
                <template v-slot:activator="{ on: onLang }">
                  <v-btn icon v-on="onLang">
                    <v-icon>{{$vuetify.icons.next}}</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile v-for="l in $i18n.availableLocales" :key="l"
                               @click="$i18n.locale = l">
                    {{$t('name', l)}}
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content class="app-content" :class="{ smAndDown: $vuetify.breakpoint.smAndDown}">
      <router-view/>
    </v-content>

    <v-bottom-nav app class="app-footer" fixed
                  :value="true" :active.sync="bottomNav">
      <v-btn v-for="item in navItems" :key="item.path"
             :color="item.color" :value="item.path" flat class="app-footer-button">
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>

    <v-snackbar v-model="showReloadAlert" bottom :timeout="0" color="error">
      <div>{{ $t('app.reloadAlert') }}</div>
      <v-btn outline @click="locationReload(true)">
        {{ $t('app.reload') }}
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { applyDarkMode } from '@/store';

export default {
  name: 'App',
  data() {
    return {
      navItems: [
        {
          path: '/productions',
          text: 'Productions',
          icon: this.$vuetify.icons.list,
          color: 'orange',
        },
        {
          path: '/',
          text: 'Home',
          icon: this.$vuetify.icons.home,
          color: 'blue',
        },
        {
          path: '/histories',
          text: 'History',
          icon: this.$vuetify.icons.timeline,
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
    darkMode: {
      get() {
        return this.$store.state.darkMode;
      },
      set(val) {
        this.$store.commit('darkMode', val);
      },
    },
  },
  mounted() {
    applyDarkMode();

    if (window.isUpdateAvailable) {
      window.isUpdateAvailable.then((available) => {
        this.showReloadAlert = available;
      });
    }
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

  .v-list__group__items--no-action .v-list__tile {
    padding-left: 32px;
  }

  .app-footer-button .v-btn__content {
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
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
    height: calc(56px + constant(safe-area-inset-bottom)) !important;
    height: calc(56px + env(safe-area-inset-bottom)) !important;
  }
</style>

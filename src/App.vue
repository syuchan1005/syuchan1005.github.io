<template>
  <v-app>
    <v-toolbar app color="green lighten-1" fixed dark>
      <v-toolbar-title class="headline text-uppercase">
        syuchan1005's Portfolio
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-bottom-nav app fixed dark :value="true" :active.sync="bottomNav">
      <v-btn v-for="item in navItems" :key="item.path"
             :color="item.color" :value="item.path" flat>
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
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
      ],
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

<style lang="scss" scoped>
</style>

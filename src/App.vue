<template>
  <v-app>
    <v-toolbar app color="green lighten-1" dark>
      <v-toolbar-title class="headline text-uppercase">
        syuchan1005's Portfolio
      </v-toolbar-title>
      <v-spacer />
      <v-btn color="#55acee" href="https://twitter.com/syu_chan_1005">
        <v-icon dark left>fab fa-twitter</v-icon>
        Twitter
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

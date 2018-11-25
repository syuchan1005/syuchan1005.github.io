<template>
  <div class="productions">
    <v-timeline :dense="$vuetify.breakpoint.xsOnly">
      <v-timeline-item v-for="(p, i) in computedProductions" :key="i"
                       :color="p.color" :left="p.left" :right="!p.left"
                       :small="p.small" :icon="p.dotIcon" fill-dot
                       :hide-dot="p.hideDot">
        <div v-if="p.subheader" :style="{ float: p.left ? 'right' : undefined }">
          <span class="headline font-weight-bold">
          {{ p.body }}
        </span>
        </div>
        <v-card v-else>
          <v-card-title :class="[p.color, 'justify-end']"
                        :style="{ 'flex-flow': p.left ? 'row-reverse' : 'row' }">
            <v-icon dark size="42" :class="{'mr-3': !p.left}">{{ p.titleIcon }}</v-icon>
            <h2 class="display-1 white--text font-weight-light" :class="{'mr-3': p.left}">
              {{ p.title }}
            </h2>
            <v-spacer />
            <v-btn v-if="p.link" icon dark :href="p.link" target="_blank" style="margin:0">
              <v-icon>open_in_new</v-icon>
            </v-btn>
          </v-card-title>
          <v-container>
            {{ p.body }}
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: 'Productions',
  data() {
    return {
      productions: [
        {
          left: true,
          small: false,
          dotIcon: 'home',
          color: 'blue lighten-1',
          link: 'https://github.com/syuchan1005',
          titleIcon: 'email',
          title: 'Title 1',
          body: 'A',
        },
        {
          subheader: true,
          hideDot: true,
          body: 'TEST_B',
        },
        {
          small: true,
          color: 'green lighten-1',
          titleIcon: 'settings',
          title: 'Title 2',
          body: 'B',
        },
        {
          subheader: true,
          hideDot: true,
          body: 'TEST',
        },
      ],
    };
  },
  computed: {
    computedProductions() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return this.productions.map(v => (v.subheader ? v : { ...v, left: false }));
      }
      return this.productions.map((v, i, a) => {
        if (v.subheader && v.left === undefined) {
          // eslint-disable-next-line no-param-reassign
          v.left = i > 0 ? !a[i - 1].left : false;
        }
        return v;
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

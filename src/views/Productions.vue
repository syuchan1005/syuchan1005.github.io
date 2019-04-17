<template>
  <div class="productions" :style="{ '--seed': seed }" :class="{ dark: darkMode }">
    <template v-for="k in Object.keys(items).sort((a, b) => b - a)">
      <div :key="k" class="display-1">{{ k }}</div>
      <div :key="`${k}-${items[k].length}`" class="cards">
        <v-card v-for="item in items[k]" :key="`${k}-${item.title}`">
          <v-img v-if="item.src" :src="item.src" aspect-ratio="1.7778" />

          <v-card-title v-if="item.src">
            <div class="headline" :class="textColor(item.color)">{{ item.title }}</div>
            <div style="white-space: pre-wrap;">{{ item.body }}</div>
          </v-card-title>

          <v-card-title v-if="!item.src" :class="[item.color]">
            <div class="display-1 white--text font-weight-light">
              {{ item.title }}
            </div>
          </v-card-title>

          <v-card-text v-if="!item.src" style="white-space: pre-wrap;">{{ item.body }}</v-card-text>

          <v-card-actions>
            <v-btn v-if="item.link" outline :href="item.link" :aria-label="item.title"
                   target="_blank" rel="noopener" style="margin:0" :color="item.color">
              Repository
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="$set(item, 'show', !item.show)" v-if="item.more">
              more
              <v-icon right :style="{ transform: item.show ? 'rotate(-180deg)' : '' }">
                {{$vuetify.icons.expand}}
              </v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition v-if="item.more">
            <v-list v-show="item.show">
              <template v-for="m in item.more">
                <v-list-tile v-if="Array.isArray(m)" :key="`${m[0]} ${m[1]}`">
                  <v-list-tile-content>
                    <v-list-tile-sub-title>{{ m[0] }}</v-list-tile-sub-title>
                    <v-list-tile-title>{{ m.slice(1).join(', ') }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-else :key="m">
                  <v-list-tile-content>
                    {{ m }}
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-slide-y-transition>
        </v-card>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import productionsData from '../assets/productions.json';

export default {
  name: 'Productions',
  data() {
    return {
      seed: Date.now(),
    };
  },
  computed: {
    ...mapState(['darkMode']),
    items: () => productionsData,
  },
  methods: {
    textColor(color) {
      const c = color.split(' ');
      return [`${c[0]}--text`, `text--${c[1]}`];
    },
  },
};
</script>

<!--suppress CssInvalidFunction -->
<style lang="scss" scoped>
  .productions {
    padding: 10px;
    height: 100%;
    background-image: paint(material-gb);
    --background-color: #53E3D1;
    --colors: #FEA78C #FFA3A6 #90C4E9 #F7DB70 #EABEBF #75CCE8 #A5DEE5 #80BEAF #B3DDD1 #F5B994;

    &.dark {
      --background-color: #349085;
      --colors: #9e6857 #945f60 #537287 #88793e #917676 #4c8496 #698e92 #6da295 #85a49b #bf9073;
    }
  }

  .cards {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    column-gap: 10px;
    row-gap: 10px;
    justify-content: center;
    align-items: start;
  }
</style>

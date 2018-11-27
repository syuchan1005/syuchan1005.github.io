<template>
  <div class="productions">
    <v-timeline :dense="$vuetify.breakpoint.xsOnly" :style="{ height: '100%' }">
      <v-timeline-item v-for="(p, i) in computedProductions" :key="i"
                       :color="p.color" :left="p.left" :right="!p.left"
                       :small="p.small" :icon="p.dotIcon" :hide-dot="p.hideDot">
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
            <v-spacer/>
            <v-btn v-if="p.link" icon dark :href="p.link" :aria-label="p.title"
                   target="_blank" rel="noopener" style="margin:0">
              <v-icon>open_in_new</v-icon>
            </v-btn>
          </v-card-title>
          <v-container style="white-space: pre-wrap">{{ p.body }}</v-container>
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
          subheader: true,
          hideDot: true,
          body: '2018',
        },
        {
          small: true,
          color: 'blue lighten-1',
          link: 'https://github.com/syuchan1005/SchoolFestival2019',
          title: 'School Festival 2019',
          body: '2019年 学園祭用Webアプリ\nWebから商品の追加、統計などの閲覧、LINEBotからも操作できる',
        },
        {
          small: true,
          color: 'orange lighten-1',
          link: 'https://github.com/syuchan1005/GitPrefix',
          title: 'GitPrefix',
          body: 'IntelliJ IDEA用プラグイン\nVSCのコミット画面などから絵文字やテキストを先頭に挿入できる\n',
        },
      ],
    };
  },
  computed: {
    computedProductions() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return this.productions.map(v => (v.subheader ? v : {
          ...v,
          left: false,
        }));
      }
      return this.productions.map((v, i, a) => {
        if (v.left === undefined) {
          // eslint-disable-next-line no-param-reassign
          v.left = i > 0 ? !a[i - 1].left : true;
        }
        return v;
      });
    },
  },
};
</script>

<!--suppress CssInvalidFunction -->
<style lang="scss" scoped>
  .productions {
    height: 100%;
    background-image: paint(material-gb);
    --background-color: #53E3D1;
    --colors: #FEA78C #FFA3A6 #90C4E9 #F7DB70
    #EABEBF #75CCE8 #A5DEE5 #80BEAF
    #B3DDD1 #F5B994;
  }
</style>

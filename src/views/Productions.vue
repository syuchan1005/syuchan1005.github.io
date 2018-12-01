<template>
  <div class="productions">
    <v-timeline :dense="timelineDense" :style="{ height: '100%' }">
      <v-timeline-item v-for="(p, i) in productions" :key="i"
                       :color="p.color" :left="productionsLeft[i]" :right="!productionsLeft[i]"
                       :small="p.small" :icon="p.dotIcon" :hide-dot="p.hideDot">
        <div v-if="p.subheader" :style="{ float: productionsLeft[i] ? 'right' : undefined }">
          <span class="headline font-weight-bold">
          {{ p.body }}
        </span>
        </div>
        <v-card v-else>
          <v-card-title :class="[p.color, 'justify-end']"
                        :style="{ 'flex-flow': productionsLeft[i] ? 'row-reverse' : 'row' }">
            <v-icon dark size="42" :class="{'mr-3': !productionsLeft[i]}">{{ p.titleIcon }}</v-icon>
            <h2 class="display-1 white--text font-weight-light"
                :class="{'mr-3': productionsLeft[i]}">
              {{ p.title }}
            </h2>
          </v-card-title>
          <v-container style="white-space: pre-wrap">{{ p.body }}</v-container>
          <v-card-actions>
            <v-btn v-if="p.link" outline :href="p.link" :aria-label="p.title"
                   target="_blank" rel="noopener" style="margin:0" :color="p.color">
              GO PAGE
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="$set(p, 'show', !p.show)" v-show="p.more">
              more
              <v-icon>{{ p.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-list v-show="p.show">
              <template v-for="m in p.more">
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
          color: 'green lighten-1',
          link: 'https://github.com/syuchan1005/syuchan1005.github.io',
          title: 'syuchan1005 Portfolio',
          body: 'このサイト\nChromeなどのCSS Paint API対応ブラウザで開くと背景がうるさくなる仕様\n(DOMでも再現できるがすごく重たくなる)',
          more: [
            ['フロントエンド', 'Vue.js', 'Vuetify'],
          ],
        },
        {
          small: true,
          color: 'green',
          link: 'https://github.com/syuchan1005/SchoolFestival2019',
          title: 'School Festival 2019',
          body: '2019年 学園祭用Webアプリ\nWebから商品の追加、統計などの閲覧、LINEBotからも操作できる',
          more: [
            '1500人規模の利用を想定',
            ['フロントエンド', 'Vue.js', 'Vuetify'],
            ['バックエンド', 'Koa.js', 'GraphQL'],
            ['他', 'SQLite'],
          ],
        },
        {
          small: true,
          color: 'orange lighten-1',
          link: 'https://github.com/syuchan1005/GitPrefix',
          title: 'GitPrefix',
          body: 'IntelliJ IDEA用プラグイン\nVSCのコミット画面などから絵文字やテキストを先頭に挿入できる\n',
        },
        {
          small: true,
          color: 'blue',
          link: 'https://github.com/syuchan1005/OSX-KVM',
          title: 'OSX-KVM',
          body: 'DockerでmacOSを動かそうというもの\n内部でqemuを起動していて、VNC, SSHができる',
        },
        {
          small: true,
          color: 'purple lighten-1',
          link: 'https://github.com/syuchan1005/KataKataTaaaaaaan',
          title: 'KataKataTaaaaaaan',
          body: 'IntelliJ IDEA用プラグイン\nエディタ内で文字を打つと面白いことが起きる',
        },
        {
          subheader: true,
          hideDot: true,
          body: '2017',
        },
        {
          small: true,
          color: 'yellow darken-4',
          link: 'https://github.com/syuchan1005/NPMScriptRunner',
          title: 'NPMScriptRunner',
          body: 'IntelliJ IDEA用プラグイン\nNodejsのpackage.jsonのscriptsの横に実行ボタンを追加する\n現在では公式プラグインに統合されている',
        },
      ],
    };
  },
  computed: {
    timelineDense() {
      return this.$vuetify.breakpoint.width < 770;
    },
    productionsLeft() {
      if (this.timelineDense) return this.productions.map(() => false);
      return this.productions.map((v, i, a) => {
        if (v.left === undefined) {
          // eslint-disable-next-line no-param-reassign
          v.left = i > 0 ? !a[i - 1].left : true;
        }
        return v.left;
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

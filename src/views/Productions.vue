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
              <v-icon>{{ item.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
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

export default {
  name: 'Productions',
  data() {
    return {
      seed: Date.now(),
      items: {
        2019: [
          {
            color: 'cyan darken-1',
            title: 'Reveal in ProjectView',
            link: 'https://github.com/syuchan1005/RevealInProjectView',
            body: 'IntelliJ IDEA用プラグイン\nProjectTreeの複数のViewからProjectViewに移動するオプションを追加する。',
          },
          {
            color: 'pink accent-2',
            title: 'LoveSync',
            link: 'https://github.com/syuchan1005/LoveSync',
            body: 'パートナー同士で[Secret]したいときに押すボタンを提供する。',
            more: [
              ['フロントエンド', 'Vue.js', 'Vuetify'],
              ['バックエンド', 'Koa.js', 'GraphQL'],
              ['他', 'SQLite'],
            ],
          },
        ],
        2018: [
          {
            color: 'green lighten-1',
            link: 'https://github.com/syuchan1005/syuchan1005.github.io',
            title: 'syuchan1005 Portfolio',
            body: 'このサイト\nChromeなどのCSS Paint API対応ブラウザで開くと背景がうるさくなる仕様\n(DOMでも再現できるがすごく重たくなる)',
            more: [
              ['フロントエンド', 'Vue.js', 'Vuetify'],
            ],
          },
          {
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
            color: 'orange lighten-1',
            link: 'https://github.com/syuchan1005/GitPrefix',
            title: 'GitPrefix',
            body: 'IntelliJ IDEA用プラグイン\nVSCのコミット画面などから絵文字やテキストを先頭に挿入できる\n',
          },
          {
            color: 'blue',
            link: 'https://github.com/syuchan1005/OSX-KVM',
            title: 'OSX-KVM',
            body: 'DockerでmacOSを動かそうというもの\n内部でqemuを起動していて、VNC, SSHができる',
          },
          {
            color: 'purple lighten-1',
            link: 'https://github.com/syuchan1005/KataKataTaaaaaaan',
            title: 'KataKata Taaaaaaan',
            body: 'IntelliJ IDEA用プラグイン\nエディタ内で文字を打つと面白いことが起きる',
          },
        ],
        2017: [
          {
            color: 'yellow darken-4',
            link: 'https://github.com/syuchan1005/NPMScriptRunner',
            title: 'NPMScript Runner',
            body: 'IntelliJ IDEA用プラグイン\nNodejsのpackage.jsonのscriptsの横に実行ボタンを追加する\n現在では公式プラグインに統合されている',
          },
          {
            src: 'https://raw.githubusercontent.com/syuchan1005/Blueberry/master/screenshots/Top.png',
            link: 'https://github.com/syuchan1005/Blueberry',
            color: 'blue darken-3',
            title: 'BlueBerry',
            body: '写真, 動画の管理用Webシステム',
          },
        ],
      },
    };
  },
  computed: {
    ...mapState(['darkMode']),
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

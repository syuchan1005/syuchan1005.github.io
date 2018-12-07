<template>
  <div class="home" :class="[$vuetify.breakpoint.name]">
    <div style="text-align: center">
      <img src="../assets/icon.png" alt="icon" :width="avatarSize" class="avatar"/>
    </div>
    <div class="information">
      <div class="display-1 font-weight-black">syuchan1005</div>
      <div class="subheading">
        1999/10/05 生まれ
        <span class="body-1">2020卒 (予定)</span>
      </div>
      <div class="body-2" style="white-space: pre-wrap">
        やりたいことをやっている高専生
        就活中 (内定もらったけどまだ募集中)
      </div>
      <v-list two-line subheader class="elevation-1" v-if="appMounted">
        <template v-for="(item, index) in items">
          <details-list-tile :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
                             :item="item" v-if="!item.items" />
          <details-list-group :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
                              :item="item" v-else />
          <v-divider :key="index"/>
        </template>
      </v-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {
    DetailsListTile: () => import(/* webpackChunkName: 'details' */ '../components/DetailsListTile.vue'),
    DetailsListGroup: () => import(/* webpackChunkName: 'details' */ '../components/DetailsListGroup.vue'),
  },
  name: 'Home',
  data() {
    return {
      items: [
        {
          avatarIcon: 'mail',
          title: 'Email',
          subTitle: 'syuchan.dev@gmail.com',
          openTip: 'mailto',
          openIcon: 'send',
          openLink: 'mailto:syuchan.dev@gmail.com',
          openTarget: null,
        },
        {
          title: 'Links',
          active: true,
          items: [
            {
              avatarIcon: 'fab fa-twitter',
              title: 'Twitter',
              subTitle: '@syu_chan_1005',
              openLink: 'https://twitter.com/syu_chan_1005',
            },
            {
              avatarIcon: 'fas fa-search',
              title: 'Qiita',
              subTitle: '@syu_chan_1005',
              openLink: 'https://qiita.com/syu_chan_1005',
            },
            {
              avatarIcon: 'fab fa-github',
              title: 'Github',
              subTitle: 'syu_chan_1005',
              openLink: 'https://github.com/syuchan1005',
            },
            {
              avatarIcon: 'fas fa-pen-nib',
              title: 'はてなブログ',
              subTitle: 'syuchan1005',
              openLink: 'https://syuchan1005.hatenablog.com/',
            },
            {
              avatarIcon: 'fab fa-amazon',
              title: 'Amazon',
              subTitle: 'ほしいものリスト',
              openLink: 'http://amzn.asia/j7JpIsb',
            },
          ],
        },
        {
          title: 'License & Certificate',
          items: [
            {
              avatarIcon: 'fas fa-id-card',
              title: '基本情報技術者',
              sideTitle: 'FE',
              subTitle: '2018/11/21 取得',
            },
            {
              avatarIcon: 'fas fa-car',
              title: '普通運転免許',
              subTitle: '2018/03/05 取得',
            },
          ],
        },
        {
          title: 'Languages',
          items: [
            /* eslint-disable object-curly-newline */
            { title: 'Japanese', sideTitle: '日本語', rating: 5 },
            { title: 'English', sideTitle: '英語', rating: 3 },
            { title: 'Chinese', sideTitle: '中国語', rating: 1.5 },
            /* eslint-enable object-curly-newline */
          ],
        },
        {
          title: 'Skills',
          items: [
            {
              title: 'Languages',
              items: [
                { title: 'Javascript', rating: 4, avatarIcon: 'fab fa-js' },
                { title: 'TypeScript', rating: 3.5 },
                { title: 'Java', rating: 4, avatarIcon: 'fab fa-java' },
                { title: 'C/C++', rating: 2.5 },
                { title: 'C#', rating: 3 },
                { title: 'PHP', rating: 3, avatarIcon: 'fab fa-php' },
                { title: 'HTML5+CSS3', sideTitle: '+ scss', rating: 4 },
                { title: 'Go', rating: 3.5 },
                { title: 'Swift', rating: 3.5 },
                { title: 'Python3', rating: 3.5, avatarIcon: 'fab fa-python' },
                { title: 'Kotlin', rating: 4 },
              ],
            },
            {
              title: 'Databases',
              items: [
                { title: 'MySQL', rating: 4 },
                { title: 'SQLite', rating: 4 },
              ],
            },
            {
              title: 'Frameworks',
              items: [
                { title: 'iOS', rating: 3 },
                { title: 'Android', rating: 3 },
                { title: 'Spring', rating: 3 },
                { title: 'Laravel', rating: 3 },
                { title: 'Flask', rating: 3 },
                { title: 'Gin', rating: 3 },
                { title: 'Echo', rating: 3 },
                { title: '.Net Framework', rating: 3 },
                { title: 'jQuery', rating: 3 },
                { title: 'Vue.js', rating: 3 },
                { title: 'React', rating: 3 },
                { title: 'Node', rating: 3 },
                { title: 'Bootstrap', rating: 3 },
                { title: 'Unity', rating: 3 },
                { title: 'Unreal Engine', rating: 2.5 },
              ],
            },
            {
              title: 'Other',
              items: [
                { title: 'Ubuntu', rating: 3 },
                { title: 'Debian', rating: 3 },
                { title: 'macOS', rating: 3 },
                { title: 'Windows', rating: 3 },
                { title: 'Apache', rating: 3 },
                { title: 'nginx', rating: 3 },
                { title: 'Tomcat', rating: 3 },
                { title: 'Redis', rating: 3 },
                { title: 'memcached', rating: 3 },
                { title: 'WordPress', rating: 2 },
                { title: 'Vim', rating: 3 },
                { title: 'Emacs', rating: 3 },
                { title: 'IntelliJ IDEA', rating: 4 },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState(['appMounted']),
    avatarSize() {
      let preWidth = this.$vuetify.breakpoint.width / 3;
      if (this.$vuetify.breakpoint.xsOnly) preWidth *= 2;
      return Math.min(preWidth, this.$vuetify.breakpoint.height / 2);
    },
  },
};
</script>

<!--suppress CssInvalidFunction, CssOverwrittenProperties -->
<style lang="scss" scoped>
  .home {
    padding-top: 20px;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    .avatar {
      image-rendering: pixelated;
      margin: 40px auto 0;
      position: sticky;
      top: calc(60px + 64px + constant(safe-area-inset-top));
      top: calc(60px + 64px + env(safe-area-inset-top));
    }

    &.sm {
      top: calc(60px + 56px + constant(safe-area-inset-top));
      top: calc(60px + 56px + env(safe-area-inset-top));
    }

    &.xs {
      display: block;

      .avatar {
        margin-top: 0;
      }
    }

    .information {
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>

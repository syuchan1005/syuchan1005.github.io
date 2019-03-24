<template>
  <v-list two-line subheader class="elevation-1" v-if="appMounted">
    <template v-for="(item, index) in items">
      <details-list-tile :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
                         :item="item" v-if="!item.items" />
      <details-list-group :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
                          :item="item" v-else />
      <v-divider :key="index"/>
    </template>
  </v-list>
</template>

<script>
import { mapState } from 'vuex';
import DetailsListTile from './DetailsListTile.vue';
import DetailsListGroup from './DetailsListGroup.vue';

export default {
  components: {
    DetailsListTile,
    DetailsListGroup,
  },
  name: 'DetailsList',
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
              title: 'i18n detailsList.links.hatenaBlog',
              subTitle: 'syuchan1005',
              openLink: 'https://syuchan1005.hatenablog.com/',
            },
            {
              avatarIcon: 'fab fa-amazon',
              title: 'i18n detailsList.links.amazon',
              subTitle: 'i18n detailsList.links.wishlist',
              openLink: 'http://amzn.asia/j7JpIsb',
            },
          ],
        },
        {
          title: 'License & Certificate',
          items: [
            {
              avatarIcon: 'fas fa-id-card',
              title: 'i18n detailsList.license.fe',
              sideTitle: 'FE',
              subTitle: '2018/11/21 -',
            },
            {
              avatarIcon: 'fas fa-car',
              title: 'i18n detailsList.license.driver',
              subTitle: '2018/03/05 -',
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
  },
};
</script>

<style scoped>

</style>

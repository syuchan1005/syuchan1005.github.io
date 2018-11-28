<template>
  <div class="home" :class="[$vuetify.breakpoint.name]">
    <div class="avatar-container">
      <img src="@/assets/icon.png" alt="icon"
           :width="avatarSize" style="image-rendering: pixelated;"/>
    </div>
    <div class="information">
      <div class="display-1 font-weight-black">syuchan1005</div>
      <div class="subheading">2020卒 (予定)</div>
      <div class="body-2" style="white-space: pre-wrap">
        やりたいことをやっている高専生
        就活中
      </div>
      <v-list two-line subheader class="elevation-1">
        <template v-for="item in items">
          <v-list-tile :key="item.title" v-if="item.tile">
            <v-list-tile-avatar>
              <v-icon>{{ item.avatarIcon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subTitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action v-show="item.openIcon || item.openLink">
              <v-btn icon :href="item.openLink" rel="noopener" :aria-label="item.title"
                     :target="item.openTarget === null ? null : item.openTarget || '_blank'">
                <v-icon>{{ item.openIcon || 'arrow_forward' }}</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-group v-model="item.active" no-action :key="item.title" v-else>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click="() => {}"
            >
              <v-list-tile-avatar>
                <v-icon>{{ subItem.avatarIcon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ subItem.subTitle }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action v-show="subItem.openIcon || subItem.openLink">
                <v-btn icon :href="subItem.openLink" rel="noopener" :aria-label="subItem.title"
                       :target="subItem.openTarget === null
                       ? null : subItem.openTarget || '_blank'">
                  <v-icon>{{ subItem.openIcon || 'arrow_forward' }}</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </template>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      items: [
        {
          tile: true,
          avatarIcon: 'mail',
          title: 'Email',
          subTitle: 'syuchan.dev@gmail.com',
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
          ],
        },
      ],
    };
  },
  computed: {
    avatarSize() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return this.$vuetify.breakpoint.width * 0.6;
      }
      return this.$vuetify.breakpoint.width / 3;
    },
  },
};
</script>

<!--suppress CssInvalidFunction -->
<style lang="scss" scoped>
  .home {
    padding-top: 20px;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    .avatar-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    &.xs {
      display: block;
    }

    .information {
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>

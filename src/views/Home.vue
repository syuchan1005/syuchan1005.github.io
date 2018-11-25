<template>
  <div class="home" :class="[$vuetify.breakpoint.name]">
    <div class="avatar-container">
      <v-img src="https://github.com/syuchan1005.png?size=8" aspect-ratio="1" :max-width="avatarSize"
             :style="{ imageRendering: 'pixelated' }"/>
    </div>
    <div class="information">
      <div class="display-1 font-weight-black">syuchan1005</div>
      <div class="subheading">2020卒 (予定)</div>
      <div class="body-2" style="white-space: pre-wrap">
        やりたいことをやっている高専生
        就活中
      </div>
      <v-list two-line subheader class="elevation-1">
        <v-subheader inset>Contacts</v-subheader>
        <v-list-tile v-for="contact in contacts" :key="contact.title">
          <v-list-tile-avatar>
            <v-icon>{{ contact.avatarIcon }}</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ contact.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ contact.subTitle }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action v-show="contact.openIcon || contact.openLink">
            <v-btn icon :href="contact.openLink"
                   :target="contact.openTarget === null ? null : contact.openTarget || '_blank'">
              <v-icon>{{ contact.openIcon || 'arrow_forward' }}</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      contacts: [
        {
          avatarIcon: 'mail',
          title: 'Email',
          subTitle: 'syuchan.dev@gmail.com',
          openIcon: 'send',
          openLink: 'mailto:syuchan.dev@gmail.com',
          openTarget: null,
        },
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

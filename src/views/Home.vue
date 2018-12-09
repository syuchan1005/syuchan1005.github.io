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
      <details-list />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {
    DetailsList: () => import(/* webpackChunkName: 'detailList' */ '../components/DetailsList.vue'),
  },
  name: 'Home',
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

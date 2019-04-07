<template>
  <div class="home" :class="[$vuetify.breakpoint.name]">
    <div style="text-align: center">
      <img src="../assets/icon.png" alt="icon" :width="avatarSize" class="avatar"/>
    </div>
    <div class="information">
      <div class="display-1 font-weight-black">syuchan1005</div>
      <div class="subheading">{{ $t('home.birthday') }}</div>
      <span class="body-1">{{ $t('home.info') }}</span>
      <div class="body-2" style="white-space: pre-wrap; margin:5px"
           v-html="$t('home.description')"></div>
      <details-list class="list"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DetailsList from '../components/DetailsList.vue';

export default {
  components: {
    DetailsList,
  },
  name: 'Home',
  computed: {
    ...mapState(['appMounted']),
    avatarSize() {
      let preWidth = this.$vuetify.breakpoint.width / 3;
      if (this.$vuetify.breakpoint.xsOnly) preWidth *= 2;
      preWidth = Math.min(preWidth, this.$vuetify.breakpoint.height / 2);
      if (preWidth % 8 !== 0) preWidth += (8 - (preWidth % 8));
      return preWidth;
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

      .list {
        margin-top: 10px;
      }
    }
  }
</style>

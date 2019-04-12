<template>
  <v-list two-line subheader class="elevation-1">
    <template v-for="(item, index) in items">
      <details-list-tile :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
                         @clickAction="(args) => $emit('clickAction', args)"
                         :item="item" v-if="!item.items"/>
      <details-list-group :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
                          @clickAction="(args) => $emit('clickAction', args)"
                          :item="item" v-else/>
      <v-divider :key="index" v-if="index !== items.length - 1"/>
    </template>
  </v-list>
</template>

<script>
import DetailsListTile from './DetailsListTile.vue';
import DetailsListGroup from './DetailsListGroup.vue';

export default {
  components: {
    DetailsListTile,
    DetailsListGroup,
  },
  name: 'DetailsList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

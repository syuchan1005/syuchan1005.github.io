<template>
  <v-list-group v-model="item.active" no-action :sub-group="subGroup"
                :key="`${item.title} ${item.sideTitle} ${item.subTitle}`">
    <v-list-item slot="activator">
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <template v-for="subItem in item.items">
      <details-list-tile :item="subItem" v-if="lazy && !subItem.items"
                         @clickAction="(args) => $emit('clickAction', args)"
                         :key="`${subItem.title} ${subItem.sideTitle} ${subItem.subTitle}`" />
      <details-list-group :item="subItem" sub-group v-else-if="lazy"
                          @clickAction="(args) => $emit('clickAction', args)"
                          :key="`${subItem.title} ${subItem.sideTitle} ${subItem.subTitle}`" />
    </template>
  </v-list-group>
</template>

<script>
import DetailsListTile from './DetailsListTile.vue';

export default {
  components: {
    DetailsListTile,
  },
  name: 'DetailsListGroup',
  props: {
    item: {
      type: Object,
      required: true,
    },
    subGroup: Boolean,
  },
  data() {
    return {
      lazy: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.lazy = true;
    });
  },
};
</script>

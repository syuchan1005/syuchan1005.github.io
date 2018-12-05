<template>
  <v-list-group v-model="item.active" no-action :sub-group="subGroup"
                :key="`${item.title} ${item.sideTitle} ${item.subTitle}`">
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <template v-for="subItem in item.items">
      <details-list-tile :item="subItem" v-if="item.active && !subItem.items"
                         :key="`${subItem.title} ${subItem.sideTitle} ${subItem.subTitle}`" />
      <details-list-group :item="subItem" sub-group v-else-if="item.active"
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
};
</script>

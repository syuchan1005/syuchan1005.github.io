<template>
  <v-list two-line subheader class="elevation-1">
    <template v-for="(item, index) in items">
      <details-list-tile
        v-if="!item.items"
        :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
        :item="item"
        @clickAction="(args) => $emit('clickAction', args)"
      />
      <details-list-group
        v-else
        :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
        :item="item"
        @clickAction="(args) => $emit('clickAction', args)"
      />
      <v-divider v-if="index !== items.length - 1" :key="index" />
    </template>
  </v-list>
</template>

<script>
import DetailsListTile from './DetailsListTile.vue'
import DetailsListGroup from './DetailsListGroup.vue'

export default {
  name: 'DetailsList',
  components: {
    DetailsListTile,
    DetailsListGroup
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

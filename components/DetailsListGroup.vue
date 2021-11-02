<template>
  <v-list-group
    :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
    :value="item.active"
    no-action
    :sub-group="subGroup"
  >
    <v-list-item slot="activator">
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <template v-for="subItem in item.items">
      <details-list-tile
        v-if="lazy && !subItem.items"
        :key="`${subItem.title} ${subItem.sideTitle} ${subItem.subTitle}`"
        :item="subItem"
        @clickAction="(args) => $emit('clickAction', args)"
      />
      <details-list-group
        v-else-if="lazy"
        :key="`${subItem.title} ${subItem.sideTitle} ${subItem.subTitle}`"
        :item="subItem"
        sub-group
        @clickAction="(args) => $emit('clickAction', args)"
      />
    </template>
  </v-list-group>
</template>

<script>
import DetailsListTile from './DetailsListTile.vue'

export default {
  name: 'DetailsListGroup',
  components: {
    DetailsListTile
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    subGroup: Boolean
  },
  data () {
    return {
      lazy: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.lazy = true
    })
  }
}
</script>

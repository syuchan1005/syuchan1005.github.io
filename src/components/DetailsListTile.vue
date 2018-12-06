<template>
  <v-list-tile>
    <v-list-tile-avatar>
      <v-icon>{{ item.avatarIcon }}</v-icon>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>
        {{ item.title }}
        <span class="body-1 font-weight-light">{{ item.sideTitle }}</span>
      </v-list-tile-title>
      <v-list-tile-sub-title>{{ item.subTitle }}</v-list-tile-sub-title>
      <v-rating v-if="item.rating" v-model="item.rating" color="yellow darken-2"
                :size="$vuetify.breakpoint.width < 750 ? 16 : 22" half-increments readonly />
    </v-list-tile-content>

    <div class="subheading" v-if="item.rightText">
      {{ item.rightText }}
    </div>

    <div class="subheading" v-if="item.startDate">
      {{ Math.round((Date.now() - item.startDate.valueOf()) / 3153600000) / 10 }}年
    </div>

    <v-list-tile-action v-show="item.openIcon || item.openLink">
      <v-tooltip v-if="item.openTip" top>
        <v-btn icon slot="activator" :href="item.openLink" rel="noopener" :aria-label="item.title"
               :target="item.openTarget === null ? null : item.openTarget || '_blank'">
          <v-icon>{{ item.openIcon || 'arrow_forward' }}</v-icon>
        </v-btn>
        <span>{{ item.openTip }}</span>
      </v-tooltip>
      <v-btn icon v-else :href="item.openLink" rel="noopener" :aria-label="item.title"
             :target="item.openTarget === null ? null : item.openTarget || '_blank'">
        <v-icon>{{ item.openIcon || 'arrow_forward' }}</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  name: 'DetailsListTile',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

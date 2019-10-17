<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-icon>{{ item.avatarIcon }}</v-icon>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>
        {{ item.title.startsWith('i18n ') ? $t(item.title.substring(5)) : item.title }}
        <span class="body-1 font-weight-light">
          {{ item.sideTitle }}
        </span>
      </v-list-item-title>
      <v-list-item-subtitle>
        {{ (item.subTitle && item.subTitle.startsWith('i18n '))
            ? $t(item.subTitle.substring(5)) : item.subTitle }}
      </v-list-item-subtitle>
      <v-rating v-if="item.rating" v-model="item.rating" color="yellow darken-2"
                :size="$vuetify.breakpoint.width < 750 ? 16 : 22" half-increments readonly />
    </v-list-item-content>

    <div class="subheading" v-if="item.rightText">
      {{ item.rightText }}
    </div>

    <div class="subheading" v-if="item.startDate">
      {{ Math.round((Date.now() - item.startDate.valueOf()) / 3153600000) / 10 }}年
    </div>

    <v-list-item-action v-show="item.openIcon || item.openLink">
      <v-tooltip v-if="item.openTip" top>
        <template v-slot:activator="{ on }">
          <v-btn icon :href="item.openLink" rel="noopener" v-on="on" :aria-label="item.title"
                 :target="item.openTarget === null ? null : item.openTarget || '_blank'">
            <v-icon>{{ item.openIcon || $vuetify.icons.values.next }}</v-icon>
          </v-btn>
        </template>
        <span>{{ item.openTip }}</span>
      </v-tooltip>
      <v-btn v-else-if="item.openAction" @click="$emit('clickAction', item.openAction)"
             icon :aria-label="item.title">
        <v-icon>{{ item.openIcon || $vuetify.icons.values.next }}</v-icon>
      </v-btn>
      <v-btn icon v-else :href="item.openLink"
             rel="noopener" :aria-label="item.title"
             :target="item.openTarget === null ? null : item.openTarget || '_blank'">
        <v-icon>{{ item.openIcon || $vuetify.icons.values.next }}</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
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

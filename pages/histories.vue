<template>
  <div class="history">
    <v-timeline dense>
      <v-timeline-item v-for="(item, i) in items" :key="i" :color="itemTypes[item.type][1]">
        <v-card v-if="item.type !== 3" class="elevation-2">
          <v-card-title>
            <div class="headline">
              {{ item.title[$i18n.locale === 'ja' ? 0 : 1] }}
            </div>
            <div class="subheading" style="margin-left: 16px">
              {{ item.title[$i18n.locale === 'ja' ? 1 : 0] }}
            </div>
          </v-card-title>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>{{ $t('histories.jobType') }}</v-list-item-subtitle>
                <v-list-item-title>
                  {{ $t(`histories.type.${itemTypes[item.type][0]}`) }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="(i1, li) in item.body" :key="li">
              <v-list-item-content>
                <v-list-item-subtitle>{{ $t(`histories.${i1[0]}`) }}</v-list-item-subtitle>
                <v-list-item-title style="white-space: pre-wrap;">
                  {{ i1[1] }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer />
            <v-btn v-for="(a, ai) in item.actions" :key="ai" outlined :href="a[1]">
              {{ a[0] }}
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else>
          <v-card-title>
            <div class="headline">
              {{ item.title[$i18n.locale === 'ja' ? 0 : 1] }}
            </div>
            <div class="subheading" style="margin-left: 16px">
              {{ item.title[$i18n.locale === 'ja' ? 1 : 0] }}
            </div>
          </v-card-title>
          <a
            class="h2"
            style="padding: 0 0 8px 32px;display: block"
            :href="item.articleUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.articleTitle }}
            <span>({{ item.articleBy }})</span>
          </a>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: 'Histories',
  computed: {
    itemTypes: () => [
      ['intern', 'green'],
      ['casual_job', 'orange'],
      ['new_grad', 'blue'],
      ['article', 'purple']
    ],
    items: () => [
      {
        title: ['LINE株式会社', 'LINE Corporation'],
        type: 3,
        articleTitle: '新卒エンジニアの仕事〜2020年入社のAndroidエンジニア編〜',
        articleUrl: 'https://engineering.linecorp.com/ja/blog/new-graduate-20-app-dev3/',
        articleBy: 'LINE Engineering blog'
      },
      {
        title: ['LINE株式会社', 'LINE Corporation'],
        type: 2,
        body: [
          ['period', '2020/04/01 ~'],
          ['languages', 'Java, Kotlin'],
          ['frameworks', 'Android'],
          ['content', 'Androidアプリケーションの機能追加, プロジェクト進行']
        ]
      },
      {
        title: ['LINE株式会社', 'LINE Corporation'],
        type: 1,
        body: [
          ['period', '2019/08/05 to 2019/08/30'],
          ['languages', 'Java, Kotlin'],
          ['frameworks', 'Android'],
          ['content', 'Androidアプリケーションの機能追加, 単体テスト, 結合テストの大規模追加']
        ]
      },
      {
        title: ['LINE株式会社', 'LINE Corporation'],
        type: 1,
        body: [
          ['period', '2019/02/22 to 2019/03/29'],
          ['languages', 'Java, Kotlin'],
          ['frameworks', 'Android'],
          ['content', 'Androidアプリケーションの機能追加']
        ]
      },
      {
        title: ['サイボウズ株式会社', 'Cybozu, Inc.'],
        type: 0,
        body: [
          ['period', '2018/08/06 to 2018/08/10'],
          ['languages', 'Java, Kotlin'],
          ['frameworks', 'Spring Framework'],
          ['other', 'MySQL'],
          ['content', 'Webアプリケーションの機能追加']
        ]
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.history {
  height: 100%;

  .v-timeline {
    height: 100%;
  }
}
</style>

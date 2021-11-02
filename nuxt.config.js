export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio - syuchan1005.github.io',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'syuchan1005\'s portfolio. It contains details.'
      },
      { name: 'author', content: 'syuchan1005' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@syu_chan_1005' },
      { name: 'twitter:image', content: 'https://github.com/syuchan1005.png' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://syuchan1005.github.io' },
      { property: 'og:title', content: 'Portfolio - syuchan1005' },
      { property: 'og:site_name', content: 'Portfolio - syuchan1005' },
      { property: 'og:description', content: 'There are any links and develop software.' },
      { property: 'og:image', content: 'https://github.com/syuchan1005.png' },
      { property: 'og:image:alt', content: 'syuchan1005 head icon' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', { id: 'UA-82930525-4' }],
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      theme_color: '#66bb6a'
    },
    manifest: {
      lang: 'ja',
      name: 'syuchan1005 Portfolio',
      short_name: 'syuchan1005',
      useWebmanifestExtension: true,
      shortcuts: [
        {
          name: 'Open home tab',
          short_name: 'Home Tab',
          description: 'View the profile and skills',
          url: '/home?utm_source=shortcut'
        },
        {
          name: 'Open productions tab',
          short_name: 'Productions Tab',
          description: 'View the my products',
          url: '/productions?utm_source=shortcut'
        },
        {
          name: 'Open histories tab',
          short_name: 'Histories Tab',
          description: 'View the my histories',
          url: '/histories/?utm_source=shortcut#'
        }
      ]
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    optionsPath: './vuetify.options.js'
  },

  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja',
      messages: {
        ja: {
          name: '日本語',
          app: {
            reloadAlert: '新しいアップデートがあります!\nリロードして更新して下さい.',
            reload: 'リロード'
          },
          home: {
            birthday: '1999/10/05 生まれ',
            info: '2020卒高専生(CS)',
            description: '最近の趣味は個人用Webサービス作成。\n使いやすさを主軸にWebなどを用いて良いサービスを提供・作成する仕事がしたい'
          },
          detailsList: {
            links: {
              hatenaBlog: 'はてなブログ',
              amazon: 'Amazon',
              wishlist: 'ほしいものリスト'
            },
            license: {
              fe: '基本情報技術者',
              driver: '普通運転免許 (AT限定)'
            }
          },
          contact: {
            email: 'メールアドレス (返信が必要な場合のみ)',
            name: '名前 (返信が必要な場合のみ)',
            title: 'タイトル',
            message: '内容',
            success: '送信しました。',
            failure: '送信に失敗しました。'
          },
          histories: {
            type: {
              intern: 'インターン',
              casual_job: '短期アルバイト',
              new_grad: '新卒入社'
            },
            jobType: '形態',
            period: '期間',
            languages: '言語',
            frameworks: 'フレームワーク',
            other: 'その他',
            content: '内容'
          }
        },
        en: {
          name: 'English',
          app: {
            reloadAlert: 'Coming new Update!\nPlease reload.',
            reload: 'Reload'
          },
          home: {
            birthday: 'Birthday: 1999/10/05',
            info: 'Graduation: 2020, technical college(CS)',
            description: 'My recent hobby is creating personal web services.\nI want to work to provide and create good services using the Web, etc. with ease of use as the main focus.'
          },
          detailsList: {
            links: {
              hatenaBlog: 'Hatena Blog',
              amazon: 'Amazon (jp)',
              wishlist: 'Wishlist'
            },
            license: {
              fe: 'Fundamental Information Technology Engineer Examination',
              driver: 'Drivers License (AT, Japan)'
            }
          },
          contact: {
            email: 'E-Mail (when need reply)',
            name: 'Name (when need reply)',
            title: 'Title',
            message: 'Message',
            success: 'Message sent successfully',
            failure: 'Message sent failure'
          },
          histories: {
            type: {
              intern: 'Intern',
              casual_job: 'Casual job',
              new_grad: 'New grad'
            },
            jobType: 'Type',
            period: 'Period',
            languages: 'Languages',
            frameworks: 'Frameworks',
            other: 'Other',
            content: 'Contents'
          }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}

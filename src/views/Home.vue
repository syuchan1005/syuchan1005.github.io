<template>
  <div class="home" :class="[$vuetify.breakpoint.name]">
    <div style="text-align: center">
      <img src="../assets/icon.png" alt="icon" :width="avatarSize" class="avatar"/>
    </div>
    <div class="information">
      <div class="name">
        <div class="display-1 font-weight-black">Shuichi Sato</div>
        <div class="font-weight-black"><span class="aka">aka</span>syuchan1005</div>
      </div>
      <div class="subheading">{{ $t('home.birthday') }}</div>
      <span class="body-1">{{ $t('home.info') }}</span>
      <div class="body-2" style="white-space: pre-wrap; margin:5px"
           v-html="$t('home.description')"></div>
      <details-list class="list" :items="items" @clickAction="clickAction"/>
    </div>

    <v-dialog v-model="showContact" persistent :width="contact.width"
              :fullscreen="$vuetify.breakpoint.width < contact.width">
      <v-card>
        <v-toolbar dark color="green lighten-1" class="app-header">
          <v-btn icon @click="showContact = false">
            <v-icon>{{$vuetify.icons.values.close}}</v-icon>
          </v-btn>
          <v-toolbar-title>Contact</v-toolbar-title>
          <v-spacer />
          <v-btn icon @click="submitForm">
            <v-icon>{{$vuetify.icons.values.send}}</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-form ref="contactForm">
            <v-text-field :label="$t('contact.email')" v-model="contact.mail" />
            <v-text-field :label="$t('contact.name')"  v-model="contact.name" />
            <v-text-field :label="$t('contact.title')"
                          v-model="contact.title" required :rules="requiredRules"/>
            <v-textarea :label="$t('contact.message')"
                        v-model="contact.message" required :rules="requiredRules"/>
          </v-form>
        </v-card-text>

        <div v-show="contact.disabled" class="overlay">
          <v-progress-circular indeterminate color="green" size="50" width="5" />
        </div>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="contact.alert.show" bottom
                :color="contact.alert.success ? 'success' : 'error'">
      {{$t('contact.' + (contact.alert.success ? 'success' : 'failure'))}}
      <v-btn dark text @click="contact.alert.show = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios';
import DetailsList from '../components/DetailsList.vue';

export default {
  components: {
    DetailsList,
  },
  name: 'Home',
  data() {
    return {
      showContact: false,
      contact: {
        disabled: false,
        width: 450,
        alert: {
          show: false,
          success: true,
        },
        mail: '',
        name: '',
        title: '',
        message: '',
      },
    };
  },
  computed: {
    avatarSize() {
      let preWidth = this.$vuetify.breakpoint.width / 3;
      if (this.$vuetify.breakpoint.xsOnly) preWidth *= 2;
      preWidth = Math.min(preWidth, this.$vuetify.breakpoint.height / 2);
      if (preWidth % 8 !== 0) preWidth += (8 - (preWidth % 8));
      return preWidth;
    },
    requiredRules: () => [v => !!v || 'required'],
    items: () => [
      {
        title: 'Contacts',
        active: true,
        items: [
          {
            avatarIcon: 'fas fa-envelope',
            title: 'Email',
            subTitle: 'syuchan.dev@gmail.com',
            openTip: 'mailto',
            openIcon: 'fas fa-paper-plane',
            openLink: 'mailto:syuchan.dev@gmail.com',
            openTarget: null,
          },
          {
            avatarIcon: 'fas fa-pager',
            title: 'Form',
            subTitle: 'powered by google forms',
            openIcon: 'fas fa-external-link-alt',
            openAction: [
              'form',
            ],
          },
        ],
      },
      {
        title: 'Links',
        active: true,
        items: [
          {
            avatarIcon: 'fab fa-twitter',
            title: 'Twitter',
            subTitle: '@syu_chan_1005',
            openLink: 'https://twitter.com/syu_chan_1005',
          },
          {
            avatarIcon: 'fas fa-search',
            title: 'Qiita',
            subTitle: '@syu_chan_1005',
            openLink: 'https://qiita.com/syu_chan_1005',
          },
          {
            avatarIcon: 'fab fa-github',
            title: 'Github',
            subTitle: 'syu_chan_1005',
            openLink: 'https://github.com/syuchan1005',
          },
          {
            avatarIcon: 'fas fa-pen-nib',
            title: 'i18n detailsList.links.hatenaBlog',
            subTitle: 'syuchan1005',
            openLink: 'https://syuchan1005.hatenablog.com/',
          },
          {
            avatarIcon: 'fab fa-amazon',
            title: 'i18n detailsList.links.amazon',
            subTitle: 'i18n detailsList.links.wishlist',
            openLink: 'http://amzn.asia/j7JpIsb',
          },
          {
            title: 'Sourcerer',
            subTitle: 'syuchan1005',
            openLink: 'https://sourcerer.io/syuchan1005',
          },
        ],
      },
      {
        title: 'License & Certificate',
        items: [
          {
            avatarIcon: 'fas fa-id-card',
            title: 'i18n detailsList.license.fe',
            sideTitle: 'FE',
            subTitle: '2018/11/21 -',
          },
          {
            avatarIcon: 'fas fa-car',
            title: 'i18n detailsList.license.driver',
            subTitle: '2018/03/05 -',
          },
        ],
      },
      {
        title: 'Languages',
        items: [
          {
            title: 'Japanese',
            sideTitle: '日本語',
            rating: 5,
          },
          {
            title: 'English',
            sideTitle: '英語',
            rating: 3,
          },
          {
            title: 'Chinese',
            sideTitle: '中国語',
            rating: 1.5,
          },
        ],
      },
      {
        title: 'Skills',
        items: [
          {
            title: 'Languages',
            items: [
              {
                title: 'Javascript',
                rating: 4,
                avatarIcon: 'fab fa-js',
              },
              {
                title: 'TypeScript',
                rating: 3.5,
              },
              {
                title: 'Java',
                rating: 4,
                avatarIcon: 'fab fa-java',
              },
              {
                title: 'C/C++',
                rating: 2.5,
              },
              {
                title: 'C#',
                rating: 3,
              },
              {
                title: 'PHP',
                rating: 3,
                avatarIcon: 'fab fa-php',
              },
              {
                title: 'HTML5+CSS3',
                sideTitle: '+ scss',
                rating: 4,
              },
              {
                title: 'Go',
                rating: 3.5,
              },
              {
                title: 'Swift',
                rating: 3.5,
              },
              {
                title: 'Python3',
                rating: 3.5,
                avatarIcon: 'fab fa-python',
              },
              {
                title: 'Kotlin',
                rating: 4,
              },
            ],
          },
          {
            title: 'Databases',
            items: [
              {
                title: 'MySQL',
                rating: 4,
              },
              {
                title: 'SQLite',
                rating: 4,
              },
            ],
          },
          {
            title: 'Frameworks',
            items: [
              {
                title: 'iOS',
                rating: 3,
              },
              {
                title: 'Android',
                rating: 3,
              },
              {
                title: 'Spring',
                rating: 3,
              },
              {
                title: 'Laravel',
                rating: 3,
              },
              {
                title: 'Flask',
                rating: 3,
              },
              {
                title: 'Gin',
                rating: 3,
              },
              {
                title: 'Echo',
                rating: 3,
              },
              {
                title: '.Net Framework',
                rating: 3,
              },
              {
                title: 'jQuery',
                rating: 3,
              },
              {
                title: 'Vue.js',
                rating: 3,
              },
              {
                title: 'React',
                rating: 3,
              },
              {
                title: 'Node',
                rating: 3,
              },
              {
                title: 'Bootstrap',
                rating: 3,
              },
              {
                title: 'Unity',
                rating: 3,
              },
              {
                title: 'Unreal Engine',
                rating: 2.5,
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                title: 'Ubuntu',
                rating: 3,
              },
              {
                title: 'Debian',
                rating: 3,
              },
              {
                title: 'macOS',
                rating: 3,
              },
              {
                title: 'Windows',
                rating: 3,
              },
              {
                title: 'Apache',
                rating: 3,
              },
              {
                title: 'nginx',
                rating: 3,
              },
              {
                title: 'Tomcat',
                rating: 3,
              },
              {
                title: 'Redis',
                rating: 3,
              },
              {
                title: 'memcached',
                rating: 3,
              },
              {
                title: 'WordPress',
                rating: 2,
              },
              {
                title: 'Vim',
                rating: 3,
              },
              {
                title: 'Emacs',
                rating: 3,
              },
              {
                title: 'IntelliJ IDEA',
                rating: 4,
              },
            ],
          },
        ],
      },
    ]
    ,
  },
  methods: {
    clickAction(args) {
      const [type] = args;
      if (type === 'form') {
        this.showContact = true;
        this.contact.disabled = false;
        this.$ga.page('/home/contact_form');
      }
    },
    submitForm() {
      if (this.$refs.contactForm.validate()) {
        this.contact.disabled = true;
        axios({
          method: 'POST',
          url: 'https://docs.google.com/forms/d/e/1FAIpQLSe0QxS8wr9pdlZwyg-7fgqb9C0kkCCgZ6ghzHg9mHNWQco70Q/formResponse',
          data: Object.entries({
            'entry.479999266': this.contact.mail,
            'entry.167272873': this.contact.name,
            'entry.662841561': this.contact.title,
            'entry.1064052372': this.contact.message,
          }).reduce((prev, [k, v]) => prev.append(k, v) || prev, new URLSearchParams()),
        }).then(() => {
          this.contact.disabled = false;
          this.showContact = false;
          this.contact.alert.success = true;
          this.contact.alert.show = true;
        }).catch(() => {
          this.contact.disabled = false;
          this.contact.alert.success = false;
          this.contact.alert.show = true;
        });
      }
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

      .name {
        display: flex;
        flex-wrap: wrap;
      }

      .list {
        margin-top: 10px;
      }
    }

    .aka {
      line-height: 40px;
      margin: 0 0.5rem 0 16px;
      padding: 2px 4px;
      text-decoration: underline;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
</style>

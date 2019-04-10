<template>
  <v-list two-line subheader class="elevation-1" v-if="appMounted">
    <template v-for="(item, index) in items">
      <details-list-tile :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
                         @clickAction="clickAction"
                         :item="item" v-if="!item.items" />
      <details-list-group :key="`${item.title} ${item.sideTitle} ${item.subTitle}`"
                          @clickAction="clickAction"
                          :item="item" v-else />
      <v-divider :key="index" v-if="index !== items.length - 1"/>
    </template>

    <v-dialog v-model="showContact" persistent :width="contact.width"
      :fullscreen="$vuetify.breakpoint.width < contact.width">
      <v-card>
        <v-toolbar dark color="green lighten-1">
          <v-btn icon @click="showContact = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Contact</v-toolbar-title>
          <v-spacer />
          <v-btn icon @click="submitForm">
            <v-icon>send</v-icon>
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
      <v-btn dark flat @click="contact.alert.show = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-list>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

import DetailsListTile from './DetailsListTile.vue';
import DetailsListGroup from './DetailsListGroup.vue';

export default {
  components: {
    DetailsListTile,
    DetailsListGroup,
  },
  name: 'DetailsList',
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
    ...mapState(['appMounted']),
    requiredRules: () => [v => !!v || 'required'],
    items: () => [
      {
        title: 'Contacts',
        active: true,
        items: [
          {
            avatarIcon: 'mail',
            title: 'Email',
            subTitle: 'syuchan.dev@gmail.com',
            openTip: 'mailto',
            openIcon: 'send',
            openLink: 'mailto:syuchan.dev@gmail.com',
            openTarget: null,
          },
          {
            avatarIcon: 'contacts',
            title: 'Form',
            subTitle: 'powered by google forms',
            openIcon: 'open_in_new',
            openAction: ['form'],
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
          /* eslint-disable object-curly-newline */
          { title: 'Japanese', sideTitle: '日本語', rating: 5 },
          { title: 'English', sideTitle: '英語', rating: 3 },
          { title: 'Chinese', sideTitle: '中国語', rating: 1.5 },
          /* eslint-enable object-curly-newline */
        ],
      },
      {
        title: 'Skills',
        items: [
          {
            title: 'Languages',
            items: [
              { title: 'Javascript', rating: 4, avatarIcon: 'fab fa-js' },
              { title: 'TypeScript', rating: 3.5 },
              { title: 'Java', rating: 4, avatarIcon: 'fab fa-java' },
              { title: 'C/C++', rating: 2.5 },
              { title: 'C#', rating: 3 },
              { title: 'PHP', rating: 3, avatarIcon: 'fab fa-php' },
              { title: 'HTML5+CSS3', sideTitle: '+ scss', rating: 4 },
              { title: 'Go', rating: 3.5 },
              { title: 'Swift', rating: 3.5 },
              { title: 'Python3', rating: 3.5, avatarIcon: 'fab fa-python' },
              { title: 'Kotlin', rating: 4 },
            ],
          },
          {
            title: 'Databases',
            items: [
              { title: 'MySQL', rating: 4 },
              { title: 'SQLite', rating: 4 },
            ],
          },
          {
            title: 'Frameworks',
            items: [
              { title: 'iOS', rating: 3 },
              { title: 'Android', rating: 3 },
              { title: 'Spring', rating: 3 },
              { title: 'Laravel', rating: 3 },
              { title: 'Flask', rating: 3 },
              { title: 'Gin', rating: 3 },
              { title: 'Echo', rating: 3 },
              { title: '.Net Framework', rating: 3 },
              { title: 'jQuery', rating: 3 },
              { title: 'Vue.js', rating: 3 },
              { title: 'React', rating: 3 },
              { title: 'Node', rating: 3 },
              { title: 'Bootstrap', rating: 3 },
              { title: 'Unity', rating: 3 },
              { title: 'Unreal Engine', rating: 2.5 },
            ],
          },
          {
            title: 'Other',
            items: [
              { title: 'Ubuntu', rating: 3 },
              { title: 'Debian', rating: 3 },
              { title: 'macOS', rating: 3 },
              { title: 'Windows', rating: 3 },
              { title: 'Apache', rating: 3 },
              { title: 'nginx', rating: 3 },
              { title: 'Tomcat', rating: 3 },
              { title: 'Redis', rating: 3 },
              { title: 'memcached', rating: 3 },
              { title: 'WordPress', rating: 2 },
              { title: 'Vim', rating: 3 },
              { title: 'Emacs', rating: 3 },
              { title: 'IntelliJ IDEA', rating: 4 },
            ],
          },
        ],
      },
    ],
  },
  methods: {
    clickAction(args) {
      const [type] = args;
      if (type === 'form') {
        this.showContact = true;
        this.contact.disabled = false;
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
          this.contact.alert.success = false;
          this.contact.alert.show = true;
        });
      }
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

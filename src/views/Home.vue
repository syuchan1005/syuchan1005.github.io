<template>
  <div class="home" :class="[$vuetify.breakpoint.name]">
    <div style="text-align: center">
      <img src="../assets/icon.png" alt="icon" :width="avatarSize" class="avatar"/>
    </div>
    <div class="information">
      <div class="display-1 font-weight-black">syuchan1005</div>
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
            <v-icon>{{$vuetify.icons.close}}</v-icon>
          </v-btn>
          <v-toolbar-title>Contact</v-toolbar-title>
          <v-spacer />
          <v-btn icon @click="submitForm">
            <v-icon>{{$vuetify.icons.send}}</v-icon>
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
  </div>
</template>

<script>
import axios from 'axios';
import DetailsList from '../components/DetailsList.vue';
import detailsData from '../assets/details.json';

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
    items: () => detailsData,
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

      .list {
        margin-top: 10px;
      }
    }
  }
</style>

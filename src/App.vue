<template>
  <v-app id="app">
    <v-app-bar
      app
      color="element"
      height="80"
      class="px-2 px-sm-4 px-md-6 px-lg-10 px-xl-12 text--text"
    >
      <div class="text-caption text-md-h3 text-lg-h3 text-xl-h3">
        Where in the world?
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" text>
        <v-icon>
          {{ $vuetify.theme.dark ? "mdi-weather-sunny" : "mdi-weather-night" }}
        </v-icon>
        <span class="ml-2 text-button">
          {{ $vuetify.theme.dark ? "Light" : "Dark" }} Mode
        </span>
      </v-btn>
    </v-app-bar>

    <v-main class="background">
      <router-view class="px-10 py-6"></router-view>
    </v-main>

    <!-- main app snackbar alert -->
    <v-snackbar
      v-model="alertVisibility"
      color="error"
      timeout="-1"
      class="mb-20"
      style="bottom: 10px !important"
    >
      {{ alertText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" icon v-bind="attrs" @click="closeAlert">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import {
  saveCacheData,
  getCacheData,
} from "@/core/services/cache/cache.service";
import { CLOSE_ALERT } from "./core/services/store/modules/alert.module";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "App",

  data() {
    return {
      timer: null as any,
    };
  },

  computed: {
    ...mapGetters([
      "alertText",
      "alertVisibility",
    ]),
  },

  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      saveCacheData("darkTheme", this.$vuetify.theme.dark);
    },
    closeAlert() {
      this.$store.dispatch(CLOSE_ALERT);
    },
  },

  created() {
    // local storage returns string! so we can't pass the value directly
    const isDark = getCacheData("darkTheme") as string;
    if (isDark === "true") {
      this.$vuetify.theme.dark = true;
    }
  },

  watch: {
    alertVisibility: function (val) {
      if (val)
        this.timer = setTimeout(() => {
          this.closeAlert();
        }, 3000);
      else clearTimeout(this.timer);
    },
  },
});
</script>

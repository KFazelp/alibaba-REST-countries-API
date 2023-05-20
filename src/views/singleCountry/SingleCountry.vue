<template>
  <div class="py-14 px-md-16 px-lg-16 px-xl-16">
    <v-btn color="element" large class="px-8" @click="$router.push('/')">
      <v-icon left> mdi-arrow-left </v-icon>
      <div class="text-button text--text">Back</div>
    </v-btn>

    <SingleCountryLoader v-if="loading" />
    <v-row v-else class="py-14 justify-space-between">
      <v-col cols="12" xl="6" lg="6" md="6">
        <v-responsive :aspect-ratio="4 / 3">
          <v-img
            :src="selectedCountry.flagUrl"
            :height="
              this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl
                ? 500
                : 250
            "
          />
        </v-responsive>
      </v-col>
      <v-col cols="12" xl="5" lg="5" md="5">
        <div class="text-h3 text-xl-h1 text-lg-h1 text-md-h2 text--text mb-2">
          {{ selectedCountry.name }}
        </div>

        <v-row class="mb-8">
          <v-col cols="12" xl="6" lg="6" md="6">
            <DataCard
              class="py-2"
              v-for="(value, title, index) in selectedCountry.data"
              :key="index"
              :title="title"
              :value="value"
            />
          </v-col>
          <v-col cols="12" xl="5" lg="5" md="5">
            <DataCard
              class="py-2"
              v-for="(value, title, index) in selectedCountry.otherData"
              :key="index"
              :title="title"
              :value="value"
            />
          </v-col>
        </v-row>

        <div class="d-flex align-center flex-wrap">
          <div class="text-body-1 mr-4 py-4 text--text">Border Countries:</div>
          <div class="d-flex align-center flex-wrap">
            <BorderCountryCard
              v-for="(borderCountry, index) in selectedCountry.borderCountries"
              :key="index"
              :code="borderCountry"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { COUNTRY } from "@/core/services/store/modules/countries.module";
import DataCard from "@/components/DataCard.vue";
import BorderCountryCard from "./fragments/borderCountry.card";
import SingleCountryLoader from "./fragments/singleCountry.loader";
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "SingleCountry",

  props: {
    countryName: { type: String },
  },

  data() {
    return {
      loading: true,
    };
  },

  computed: {
    ...mapGetters(["selectedCountry"]),
  },

  methods: {
    async fetchData() {
      this.loading = true;
      await this.$store
        .dispatch(COUNTRY, this.countryName)
        .then(() => (this.loading = false));
    },
  },

  watch: {
    countryName: async function () {
      await this.fetchData();
    },
  },

  async created() {
    await this.fetchData();
  },

  components: {
    DataCard,
    BorderCountryCard,
    SingleCountryLoader,
  },
});
</script>

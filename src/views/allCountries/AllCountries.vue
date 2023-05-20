<template>
  <div>
    <v-row class="justify-space-between">
      <v-col
        cols="12"
        xl="5"
        lg="5"
        md="6"
        sm="12"
        class="px-md-8 px-lg-8 px-xl-8 pt-8"
      >
        <SearchBox ref="searchInput" @search="searchCountry" />
      </v-col>
      <v-col
        cols="8"
        xl="2"
        lg="2"
        md="4"
        sm="9"
        class="px-md-8 px-lg-8 px-xl-8 pt-md-8 pt-lg-8 pt-xl-8"
      >
        <CountriesFilter @filter="filterRegion" />
      </v-col>
    </v-row>

    <!-- COUNTRIES CNTAINER -->
    <div
      class="countries-list-container"
      :style="
        this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
          ? 'height: 60vh'
          : 'height: 75vh'
      "
    >
      <CountriesLoader v-if="loading" />
      <v-row v-else>
        <template v-for="(country, index) in allCountries">
          <v-col
            class="px-8 py-8"
            cols="12"
            xl="3"
            lg="3"
            md="4"
            v-if="region === null || country.data.region === region"
            :key="index"
          >
            <CountryCard :data="country" />
          </v-col>
        </template>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import {
  COUNTRIES,
  SEARCH_COUNTRY,
} from "@/core/services/store/modules/countries.module";
import CountryCard from "./fragments/country.card";
import SearchBox from "@/components/SearchBox.vue";
import CountriesFilter from "./fragments/countries.filter";
import CountriesLoader from "./fragments/countries.loader";
import Vue from "vue";
import { mapGetters } from "vuex";
import { SET_ALERT } from "@/core/services/store/modules/alert.module";

export default Vue.extend({
  name: "AllCountries",

  data() {
    return {
      loading: true,
      region: null as string | null,
    };
  },

  computed: {
    ...mapGetters(["allCountries"]),
  },

  methods: {
    async searchCountry(name: string) {
      this.loading = true;
      await this.$store
        .dispatch(SEARCH_COUNTRY, name)
        .then(() => (this.loading = false));
    },
    filterRegion(region: string) {
      this.region = region;
    },
  },

  async created() {
    await this.$store
      .dispatch(COUNTRIES)
      .then(() => (this.loading = false))
      .catch((error) => {
        this.$store.commit(SET_ALERT, {
          text: error.message,
          isError: true,
          visibility: true,
        });
      });
  },

  components: {
    CountryCard,
    SearchBox,
    CountriesLoader,
    CountriesFilter,
  },
});
</script>

<style scoped>
.countries-list-container {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
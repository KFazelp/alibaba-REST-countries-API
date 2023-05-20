<template>
  <router-link :to="`/country/${name}`">
    <div class="mr-2 my-1">
      <v-card v-if="name" class="py-2 px-8 element text--text">
        {{ name }}
      </v-card>
      <v-skeleton-loader
        v-else
        height="40"
        width="100"
        type="image"
      ></v-skeleton-loader>
    </div>
  </router-link>
</template>

<script lang="ts">
import { COUNTRY_CODE } from "@/core/services/store/modules/countries.module";
import Vue from "vue";

export default Vue.extend({
  name: "BorderCountryCard",

  props: {
    code: { type: String },
  },

  data() {
    return {
      name: null as string | null,
    };
  },

  methods: {
    async getName() {
      this.name = null;
      this.name = await this.$store.dispatch(COUNTRY_CODE, this.code); // couldn't handle this in store (its not efficient)
    },
  },

  // when we route from another country to the other, the component has not changed!
  // we have to check data manually to update name on code change
  watch: {
    code: async function() {
      await this.getName();
    },
  },

  async created() {
    await this.getName();
  },
});
</script>

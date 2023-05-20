<template>
  <v-row>
    <v-col
      class="px-8 py-8"
      cols="12"
      xl="3"
      lg="3"
      md="4"
      sm="6"
      v-for="i in 8"
      :key="i"
    >
      <v-skeleton-loader height="350" type="image, article"></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CountriesLoader",
});
</script>

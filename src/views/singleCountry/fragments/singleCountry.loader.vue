<template>
  <v-row class="py-14 justify-space-between">
    <v-col cols="12" xl="6" lg="6" md="6">
      <v-skeleton-loader
        height="200"
        width="700"
        type="image"
      ></v-skeleton-loader>
      <v-skeleton-loader
        height="200"
        width="700"
        type="image"
      ></v-skeleton-loader>
    </v-col>
    <v-col cols="12" xl="5" lg="5" md="5">
      <v-skeleton-loader width="300" height="100" type="heading"></v-skeleton-loader>

      <v-row class="mb-8">
        <v-col cols="12" xl="6" lg="6" md="6">
          <v-skeleton-loader
            v-for="i in 5"
            :key="i"
            width="200"
            height="40"
            type="text"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="12" xl="5" lg="5" md="5">
          <v-skeleton-loader
            v-for="j in 3"
            :key="j"
            width="200"
            height="40"
            type="text"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SingleCountryLoader",
});
</script>

<template>
  <router-link :to="`/country/${data.name}`">
    <v-card
      color="element"
      :height="
        this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl ? 450 : 400
      "
      elevation="5"
    >
      <v-responsive :aspect-ratio="16 / 9">
        <v-img
          :src="data.flagUrl"
          :height="
            this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl
              ? 250
              : 200
          "
        />
      </v-responsive>
      <div class="px-6 py-4 text--text">
        <div class="text-h3 mb-2">{{ data.name }}</div>
        <DataCard
          v-for="(value, title, index) in data.data"
          :key="index"
          :title="title"
          :value="value"
          small
        />
      </div>
    </v-card>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import DataCard from "@/components/DataCard.vue";

export default Vue.extend({
  name: "CountryCard",

  props: {
    data: { type: Object, required: true },
  },

  components: {
    DataCard,
  },
});
</script>

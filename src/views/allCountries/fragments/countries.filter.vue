<template>
  <v-select
    :items="items"
    :menu-props="{ bottom: true, offsetY: true, color: 'red' }"
    placeholder="Filter by Region"
    class="input--text filter-input text-subtitle-1"
    solo
    background-color="element"
    color="input"
    height="60"
    clearable
    @change="onChange"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { REGIONS } from "@/core/enums/countries.enum";

export default Vue.extend({
  name: "CountriesFilter",

  data() {
    return {
      items: REGIONS,
    };
  },

  methods: {
    onChange(region: string) {
      this.$emit("filter", region);
    },
  },
});
</script>

<style>
.v-list {
  background: var(--v-element-base) !important;
}
</style>

<template>
  <v-text-field
    v-model="target"
    color="input"
    class="input--text search-input text-subtitle-1"
    placeholder="Search for a country ..."
    prepend-inner-icon="mdi-magnify"
    solo
    height="60"
    background-color="element"
    @input="searchTimeOut"
  ></v-text-field>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SearchBox",

  data() {
    return {
      target: null as string | null,
      timer: null as number | null,
    };
  },

  methods: {
    searchTimeOut(value: string) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.$emit("search", value);
      }, 800);
    },
    clearSearch() {
      this.target = null;
      this.$emit("search", this.target);
    },
  },
});
</script>

<style lang="scss">
.search-input {
  & input {
    padding: 10px;
    color: var(--v-input-base) !important;
  }
}
</style>

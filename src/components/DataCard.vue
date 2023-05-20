<template>
  <div class="d-flex align-center">
    <div class="mr-3" :class="`text-${small ? 'subtitle' : 'body'}-1`">
      {{ title }}:
    </div>
    <div class="mr-3" :class="`text-${small ? 'subtitle' : 'body'}-2`">
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DataCard",

  props: {
    title: { type: String },
    value: { type: String },
    small: { type: Boolean, default: false },
  },
});
</script>

import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        text: "#111517", // Very Dark Blue: hsl (200, 15%, 8%)
        input: "#858585", // Dark Grey: hsl (0, 0%, 52%)
        background: "#fafafa", // Very Light Grey: hsl (0, 0%, 98%)
        element: "#ffffff", // White: hsl (0, 0%, 100%)
      },
      dark: {
        text: "#ffffff", // White: hsl (0, 0%, 100%)
        input: "#fafafa", // Dark Blue: hsl (209, 23%, 22%)
        background: "#202c37", // Very Dark Blue: hsl (207, 26%, 17%)
        element: "#2b3945", // Dark Blue: hsl (209, 23%, 22%)
      },
    },
  },
});

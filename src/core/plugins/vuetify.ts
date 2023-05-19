import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: "#007DC5",
        secondary: "#052C47",
        accent: "#00AAA5",
        danger: "#ED1651",
        info: "#0091D0",
        success: "#A4CF57",
        warning: "#FFA800",
        warningTint: "#FFCB05",
        lightBlue: "#9BC9FF",
        lightGrey: "#e4e6ef",
        accentB: "#622980",
        neutral: "#7e8299",
        neutralTint: "#bfb9c2",
        neutralShade: "#48464b",
        neutralTextTint: "#4c4e6f",
        neutralTextShade: "#2a2b42",
        backgroundA: "#ffffff",
        backgroundB: "#f5f8fa",
        backgroundBShade: "#1a1a27",
        backgroundC: "#1e1e2d",
        mamaniaPrimary: "#f0055f",
        mamaniaSecondary: "#FF80AB",
        mamaniaAccent: "#8E5A70",
        cyan: "#BAF2F2",
        pink: "#FEC3DA",
        pumpkin: "#FBAB11",
        lightPumpkin: "#ffe4b3",
        labAbnormal: "#F57C00",
        labNormal: "#4CAF50",
        medicine: "#20C4F4",
      },
    },
  },
});

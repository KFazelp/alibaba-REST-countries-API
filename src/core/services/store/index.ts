import Vue from "vue";
import Vuex from "vuex";
import countries from "./modules/countries.module";
import alert from "./modules/alert.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countries,
    alert,
  },
});

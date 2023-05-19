import Vue from "vue";
import App from "./App.vue";
import router from "./core/services/router";
import store from "./core/services/store";
import vuetify from "./core/plugins/vuetify";
import "./core/plugins/axios";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

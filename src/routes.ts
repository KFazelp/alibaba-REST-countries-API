import { RouteConfig } from "vue-router";
import AllCountries from "@/views/allCountries/AllCountries.vue";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "AllCountries",
    component: AllCountries,
  },
];

export default routes;

import { RouteConfig } from "vue-router";
import AllCountries from "@/views/allCountries/AllCountries.vue";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "AllCountries",
    component: AllCountries,
  },
  {
    path: "/country/:countryName",
    name: "SingleCountry",
    component: () => import("@/views/singleCountry/SingleCountry.vue"),
    props: true,
  },
];

export default routes;

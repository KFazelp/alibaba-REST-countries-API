import { apiCountryInterface, countriesStateInterface, countryInterface, summarizedCountryInterface } from "@/core/interfaces/countries.interface";
import apiService from "@/core/services/api/api.service";
import { countriesUrl } from "../../api/urls/countries.url";
import { HttpResponse } from "@/core/types/http.types";

// required fileds
export const ALL_COUNTRIES_FIELDS = ["name", "capital", "region", "population", "flags"];
export const SINGLE_COUNTRY_FIELDS = ["name", "tld", "currencies", "capital", "region", "subregion", "languages", "borders", "population", "flags"];

// action types
export const COUNTRIES = "getAllCountries";
export const SEARCH_COUNTRY = "searchCountryByName";
export const COUNTRY = "getSelectedCountryData";
export const COUNTRY_CODE = "getCountryNameByCode";

// mutation types
export const SET_COUNTRIES = "setAllCountries";
export const SET_SELECTED_COUNTRY = "setSelectedCountryData";

const state = {
  allCountries: [] as Array<summarizedCountryInterface>,
  country: {} as countryInterface,
} as countriesStateInterface;

const getters = {
  allCountries(state: countriesStateInterface) {
    return state.allCountries;
  },
  selectedCountry(state: countriesStateInterface) {
    return state.country;
  },
};

const actions = {
  async [COUNTRIES](context: any) {
    try {
      const response = await apiService({
        request: {
          url: countriesUrl.allCountries(),
          method: "GET",
          data: {
            fields: ALL_COUNTRIES_FIELDS.toString(),
          },
        },
      });

      const { data } = response;
      context.commit(SET_COUNTRIES, data);

      return response;
    } catch (error: any) {
      throw { ...error } as HttpResponse;
    }
  },

  async [SEARCH_COUNTRY](context: any, name: string) {
    if (name !== "") {
      try {
        const response = await apiService({
          request: {
            url: countriesUrl.singleCountry(name),
            method: "GET",
            data: {
              fields: ALL_COUNTRIES_FIELDS.toString(),
            },
          },
        });

        const { data } = response;
        context.commit(SET_COUNTRIES, data);

        return response;
      } catch (error: any) {
        throw { ...error } as HttpResponse;
      }
    } else {
      await context.dispatch(COUNTRIES);
      return null;
    }
  },

  async [COUNTRY](context: any, name: string) {
    try {
      const response = await apiService({
        request: {
          url: countriesUrl.singleCountry(name),
          method: "GET",
          data: {
            fields: SINGLE_COUNTRY_FIELDS.toString(),
          },
        },
      });

      const { data } = response;
      context.commit(SET_SELECTED_COUNTRY, data[0]);

      return response;
    } catch (error: any) {
      throw { ...error } as HttpResponse;
    }
  },

  async [COUNTRY_CODE](context: any, code: string) {
    try {
      const response = await apiService({
        request: {
          url: countriesUrl.countryCode(),
          method: "GET",
          data: {
            codes: code,
            fields: "name",
          },
        },
      });

      const { data } = response;

      return data[0].name.common;
    } catch (error: any) {
      throw { ...error } as HttpResponse;
    }
  }
};

const mutations = {
  [SET_COUNTRIES](state: countriesStateInterface, data: Array<apiCountryInterface>) {
    const tempCountries = [] as Array<summarizedCountryInterface>;
    data.forEach((country: apiCountryInterface) => {
      tempCountries.push({
        name: country.name.common,
        data: {
          population: country.population.toLocaleString('en'),
          region: country.region,
          capital: country.capital[0],
        },
        flagUrl: country.flags.png,
      } as summarizedCountryInterface);
    });
    state.allCountries = tempCountries;
  },

  [SET_SELECTED_COUNTRY](state: countriesStateInterface, data: apiCountryInterface) {
    state.country = {
      name: data.name.common,
      data: {
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population.toLocaleString('en'),
        region: data.region,
        subRegion: data.subregion,
        capital: data.capital[0],
      },
      otherData: {
        topLevelDomain: data.tld[0],
        currencies: Object.values(data.currencies)[0].name,
        languages: Object.values(data.languages).toString(),
      },
      flagUrl: data.flags.png,
      borderCountries: data.borders,
    } as countryInterface;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

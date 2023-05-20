export const countriesUrl = {
  allCountries: function () {
    return `all/`;
  },
  singleCountry: function (name: string) {
    return `name/${name}/`;
  },
  countryCode: function () {
    return `/alpha/`;
  },
};
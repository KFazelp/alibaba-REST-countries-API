export interface countriesStateInterface {
  allCountries: Array<summarizedCountryInterface>;
  country: countryInterface;
};

export interface countryInterface {
  name: string;
  data: {
    nativeName: string;
    population: number;
    region: string;
    subRegion: string;
    capital: string;
    topLevelDomain: string;
    currencies: string;
    languages: Array<string>;
  };
  borderCountries: Array<string>;
  flagUrl: string;
};

export interface summarizedCountryInterface {
  name: string;
  data: {
    population: number | string;
    region: string;
    capital: string;
  };
  flagUrl: string;
};

export interface apiCountryInterface {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  tld: Array<string>;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  capital: Array<string>;
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  borders: Array<string>;
  population: number;
  flags: {
    png: string;
  };
};

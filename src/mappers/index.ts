import { ICountry, IDataObj } from "../types";

export const transformCountries = (countries: IDataObj[]): ICountry[] => {
  return countries.map((country) => {
    return {
      flag: country.flags.svg,
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      area: country.area,
      region: country.region,
    };
  });
};

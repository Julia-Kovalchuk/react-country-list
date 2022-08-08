import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers";

export const App = () => {
  const transformedCountries = transformCountries(countries);

  return (
    <div className="container">
      <h1 className="my-5 text-center">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};

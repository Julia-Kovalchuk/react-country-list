import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-1">
          <img src={country.flag} width={50} alt="flag" />
        </div>
        <p className="col-3 m-0">{country.name}</p>
        <p className="col-2 m-0">{country.capital}</p>
        <p className="col-2 m-0">{country.region}</p>
        <Badge value={country.area} type="area" color={Color.Primary} />
        <Badge
          value={country.population}
          type="population"
          color={Color.Secondary}
        />
      </div>
    </li>
  );
};

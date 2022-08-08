export interface ICountry {
  flag: string;
  name: string;
  capital: string;
  population: number;
  area: number;
  region: string;
}

export interface IDataObj {
  flags: { svg: string };
  name: { common: string };
  capital: string[];
  population: number;
  area: number;
  region: string;
}

export type BadgeLabel = "area" | "population";

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
  Light = "light",
  Dark = "dark",
}

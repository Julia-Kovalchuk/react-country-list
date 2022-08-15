export interface ICountry {
  flag: string;
  name: string;
  capital: string;
  population: number;
  area: number;
  region: string;
}

interface IFlag {
  png: string;
  svg: string;
}

interface ILanguage {
  official: string;
  common: string;
}

interface INativeName {
  [key: string]: ILanguage | undefined;
}

interface IName {
  common: string;
  official: string;
  nativeName: INativeName;
}

export interface IInitialCountry {
  flags: IFlag;
  name: IName;
  capital: string[];
  region: string;
  area: number;
  population: number;
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

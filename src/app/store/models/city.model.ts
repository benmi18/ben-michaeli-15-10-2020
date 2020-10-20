export interface CountryModel {
  ID: string;
  LocalizedName: string;
}

export interface AdministrativeAreaModel {
  ID: string;
  LocalizedName: string;
}

export class CityModel {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: CountryModel;
  AdministrativeArea: AdministrativeAreaModel;
  redirectFromFavorite?: boolean;
}

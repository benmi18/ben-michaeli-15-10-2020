export interface RegionModel {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}

export interface CountryModel {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}

export interface AdministrativeAreaModel {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
  Level: number;
  LocalizedType: string;
  EnglishType: string;
  CountryID: string;
}

export interface TimeZoneModel {
  Code: string;
  Name: string;
  GmtOffset: number;
  IsDaylightSaving: boolean;
  NextOffsetChange: string;
}

export interface MetricModel {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface ImperialModel {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface ElevationModel {
  Metric: MetricModel;
  Imperial: ImperialModel;
}

export interface GeoPositionModel {
  Latitude: number;
  Longitude: number;
  Elevation: ElevationModel;
}

export interface GeolocationModel {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: RegionModel;
  Country: CountryModel;
  AdministrativeArea: AdministrativeAreaModel;
  TimeZone: TimeZoneModel;
  GeoPosition: GeoPositionModel;
  IsAlias: boolean;
  SupplementalAdminAreas: any[];
  DataSets: string[];
}

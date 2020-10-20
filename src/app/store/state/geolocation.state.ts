
import {
  AdministrativeAreaModel,
  CountryModel,
  GeoPositionModel,
  RegionModel,
  TimeZoneModel
  // @ts-ignore
} from '@store/models/geolocation.model';

export interface GeolocationState {
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

export const geolocationInitialState: GeolocationState = {
  Version: null,
  Key: '',
  Type: '',
  Rank: null,
  LocalizedName: '',
  EnglishName: '',
  PrimaryPostalCode: '',
  Region: {
    EnglishName: '',
    ID: '',
    LocalizedName: ''
  },
  Country: {
    EnglishName: '',
    ID: '',
    LocalizedName: ''
  },
  AdministrativeArea: {
    CountryID: '',
    EnglishName: '',
    EnglishType: '',
    ID: '',
    Level: null,
    LocalizedName: '',
    LocalizedType: ''
  },
  TimeZone: {
    Code: '',
    GmtOffset: null,
    IsDaylightSaving: false,
    Name: '',
    NextOffsetChange: null
  },
  GeoPosition: {
    Elevation: {
      Imperial: {
        Value: null,
        UnitType: null,
        Unit: ''
      },
      Metric: {
        Value: null,
        UnitType: null,
        Unit: ''
      }
    },
    Latitude: null,
    Longitude: null
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: [],
};

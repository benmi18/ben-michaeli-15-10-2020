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

export interface TemperatureModel {
  Metric: MetricModel;
  Imperial: ImperialModel;
}

export class CurrentConditionModel {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType?: any;
  IsDayTime: boolean;
  Temperature: TemperatureModel;
  MobileLink: string;
  Link: string;
  LocalSource?: {
    Id: number;
    Name: string;
    WeatherCode: string;
  };
}

export class FavoriteCurrentConditionModel extends CurrentConditionModel {
  cityKey: string;
}

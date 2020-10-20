export interface HeadlineModel {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}

export interface MinimumModel {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface MaximumModel {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface TemperatureModel {
  Minimum: MinimumModel;
  Maximum: MaximumModel;
}

export interface DayModel {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  LocalSource?: {
    Id: number;
    Name: string;
    WeatherCode: string;
  };
}

export interface NightModel {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  LocalSource?: {
    Id: number;
    Name: string;
    WeatherCode: string;
  };
}

export interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: TemperatureModel;
  Day: DayModel;
  Night: NightModel;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export interface ForecastModel {
  Headline: HeadlineModel;
  DailyForecasts: DailyForecast[];
}

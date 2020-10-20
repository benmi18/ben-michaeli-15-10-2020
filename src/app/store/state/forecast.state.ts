// @ts-ignore
// @ts-ignore
import {DailyForecastModel, HeadlineModel} from '@store/models/forecast.model';

export interface ForecastState {
  Headline: HeadlineModel;
  DailyForecasts: DailyForecastModel[];
}

export const forecastInitialState: ForecastState = {
  Headline: {
    Category: '',
    EffectiveDate: null,
    EffectiveEpochDate: null,
    EndDate: null,
    EndEpochDate: null,
    Link: '',
    MobileLink: '',
    Severity: null,
    Text: ''
  },
  DailyForecasts: []
};

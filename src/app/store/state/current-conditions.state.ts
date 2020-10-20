// @ts-ignore
import {CurrentConditionModel, FavoriteCurrentConditionModel} from '@store/models/current-condition.model';

export interface CurrentConditionsState {
  data: Array<CurrentConditionModel>;
  favoritesData: Array<FavoriteCurrentConditionModel>;
}

export const currentConditionsInitialState: CurrentConditionsState = {
  data: [],
  favoritesData: [
    {
      cityKey: '212532',
      LocalObservationDateTime: '2020-10-19T21:36:00+03:00',
      EpochTime: 1603132560,
      WeatherText: 'Clear',
      WeatherIcon: 33,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: false,
      Temperature: {
        Metric: {
          Value: 23.5,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 74,
          Unit: 'F',
          UnitType: 18
        }
      },
      MobileLink: 'http://m.accuweather.com/en/il/kafr-qasim/212532/current-weather/212532?lang=en-us',
      Link: 'http://www.accuweather.com/en/il/kafr-qasim/212532/current-weather/212532?lang=en-us'
    },
    {
      cityKey: '215854',
      LocalObservationDateTime: '2020-10-19T21:36:00+03:00',
      EpochTime: 1603132560,
      WeatherText: 'Clear',
      WeatherIcon: 33,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: false,
      Temperature: {
        Metric: {
          Value: 26.3,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 79,
          Unit: 'F',
          UnitType: 18
        }
      },
      MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us'
    }
  ]
};

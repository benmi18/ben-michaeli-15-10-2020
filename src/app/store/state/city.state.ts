export interface CityState {
  Key: string;
  LocalizedName: string;
  Type: string;
  Country: {
    ID: string;
    LocalizedName: string
  };
}

export const cityInitialState: CityState = {
  Key: '',
  LocalizedName: '',
  Type: '',
  Country: {
    ID: '',
    LocalizedName: ''
  }
};

import { RootState } from 'store';

export const selectCurrentCountry = (state: RootState) => state.countryDetails.currentCountry;
export const selectCountryDetails = (state: RootState) => state.countryDetails;
export const selectCountryNeighbors = (state: RootState) => state.countryDetails.neighbors;
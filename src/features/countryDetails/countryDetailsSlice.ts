import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, Extra, Status } from 'types';

export const loadCountryByName = createAsyncThunk<
    { data: Country[] },
    string,
    { extra: Extra }
>(
    '@@countryDetails/load-country-by-name',
    (name, { extra: { client, api } }) => {
        return client.get(api.searchByCountry(name));
    }
);

export const loadNeighborsByBorders = createAsyncThunk<
    { data: Country[] },
    string[],
    { extra: Extra }
>(
    '@@countryDetails/load-neighbors',
    (borders, { extra: { client, api } }) => {
        return client.get(api.filterByCode(borders));
    }
);

type CountryDetailsSlice = {
    currentCountry: Country | null,
    neighbors: string[],
    status: Status,
    error: string | null,
}

const initialState: CountryDetailsSlice = {
    currentCountry: null,
    neighbors: [],
    status: 'idle',
    error: null,
};

const countryDetailsSlice = createSlice({
    name: '@@countryDetails',
    initialState,
    reducers: {
        clearDetails: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryByName.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountryByName.rejected, (state) => {
                state.status = 'rejected';
                state.error = 'Cannot load data';
            })
            .addCase(loadCountryByName.fulfilled, (state, action) => {
                state.status = 'idle';
                state.currentCountry = action.payload.data[0];
            })
            .addCase(loadNeighborsByBorders.fulfilled, (state, action) => {
                state.neighbors = action.payload.data.map(country => country.name);
            })
    }
});

export const { clearDetails } = countryDetailsSlice.actions;
export const countryDetailsReducer = countryDetailsSlice.reducer;
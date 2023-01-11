import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
    '@@countryDetails/load-country-by-name',
    (name, {extra: {client, api}}) => {
        return client.get(api.searchByCountry(name));
    }
);

export const loadNeighborsByBorders = createAsyncThunk(
    '@@countryDetails/load-neighbors',
    (borders, {extra: {client, api}}) => {
        return client.get(api.filterByCode(borders));
    }
); 

const initialState = {
    currentCountry: null,
    neighbors: [],
    status: 'idle',
    error: null,
}

const detailsSlice = createSlice({
    name: '@@countryDetails',
    initialState,
    reducers: {
        clearDetails: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryByName.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountryByName.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.meta.error;
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

export const {clearDetails} = detailsSlice.actions;
export const countryDetailsReducer = detailsSlice.reducer;

export const selectCurrentCountry = (state) => state.countryDetails.currentCountry;
export const selectCountryDetails = (state) => state.countryDetails;
export const selectCountryNeighbors = (state) => state.countryDetails.neighbors;
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import * as api from 'config';
import { themeReducer } from 'features/theme/themeSlice';
import { controlsReducer } from 'features/controls/controlsSlice';
import { countriesReducer } from 'features/countries/countriesSlice';
import { countryDetailsReducer } from 'features/countryDetails/countryDetailsSlice';


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countriesReducer,
        countryDetails: countryDetailsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api,
            },
        },
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

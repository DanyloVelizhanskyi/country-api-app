import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'store';
import { selectCountryDetails } from './countryDetailsSelectors';
import { clearDetails, loadCountryByName } from './countryDetailsSlice';

export const useCountryDetails = (name: string) => {
    const dispatch = useAppDispatch();
    const countryDetails = useSelector(selectCountryDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));

        return () => {
            dispatch(clearDetails());
        }
    }, [name, dispatch]);

    return countryDetails;
};
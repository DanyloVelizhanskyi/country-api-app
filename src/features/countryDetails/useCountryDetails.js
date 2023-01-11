import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, loadCountryByName, selectCountryDetails } from "./countryDetailsSlice";

export const useCountryDetails = (name) => {
    const dispatch = useDispatch();
    const countryDetails = useSelector(selectCountryDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));

        return () => {
            dispatch(clearDetails());
        }
    }, [name, dispatch]);

    return countryDetails;
}
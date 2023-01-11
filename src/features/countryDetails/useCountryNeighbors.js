import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadNeighborsByBorders, selectCountryNeighbors } from "./countryDetailsSlice";

export const useCountryNeighbors = (borders = []) => {
    const dispatch = useDispatch();
    const neighbors = useSelector(selectCountryNeighbors);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByBorders(borders));
        }
    }, [borders, dispatch]);

    return neighbors;
}
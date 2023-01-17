import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { selectCountryNeighbors } from './countryDetailsSelectors';
import { loadNeighborsByBorders } from './countryDetailsSlice';

export const useCountryNeighbors = (borders: string[] = []) => {
    const dispatch = useAppDispatch();
    const neighbors = useSelector(selectCountryNeighbors);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByBorders(borders));
        }
    }, [borders, dispatch]);

    return neighbors;
};
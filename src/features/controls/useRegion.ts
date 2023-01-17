import { useSelector } from 'react-redux'
import { SingleValue } from 'react-select';
import { useAppDispatch } from 'store';
import { Region } from 'types';
import { selectRegion } from './controlsSelectors';
import { setRegion } from './controlsSlice';
import { CountryOption } from './CustomSelect';

type onSelect = (reg: SingleValue<CountryOption>) => void;

export const useRegion = (): [Region | '', onSelect] => {
    const dispatch = useAppDispatch();
    const region = useSelector(selectRegion);

    const handleSelect: onSelect = (reg) => {
        if (reg) {
            dispatch(setRegion(reg.value));
        } else {
            dispatch(setRegion(''));
        }
    }

    return [region, handleSelect];
};
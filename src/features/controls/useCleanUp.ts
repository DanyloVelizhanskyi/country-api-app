import { useAppDispatch } from 'store';
import { clearControls } from './controlsSlice';

export const useCleanUp = () => {
    const dispatch = useAppDispatch();

    const cleanUp = () => dispatch(clearControls());

    return () => dispatch(cleanUp());
};
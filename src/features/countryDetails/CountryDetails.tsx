import { NavigateFunction } from 'react-router-dom';
import { CountryInfo } from './CountryInfo';
import { useCountryDetails } from './useCountryDetails';

interface CountryDetailsProps {
    name?: string,
    navigate: NavigateFunction,
}

const CountryDetails = ({ name = '', navigate }: CountryDetailsProps) => {

    const { status, error, currentCountry } = useCountryDetails(name);

    return (
        <>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {currentCountry && <CountryInfo push={navigate} {...currentCountry} />}
        </>
    );
};

export { CountryDetails };
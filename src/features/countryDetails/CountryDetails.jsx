import { CountryInfo } from "./CountryInfo";
import { useCountryDetails } from "./useCountryDetails";

const CountryDetails = ({ name = '', navigate }) => {

    const { status, error, currentCountry } = useCountryDetails(name);

    return (
        <>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {currentCountry && <CountryInfo push={navigate} {...currentCountry} />}
        </>
    )
}

export { CountryDetails };
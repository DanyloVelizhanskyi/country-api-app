import { useNavigate } from "react-router-dom";

import { useCountries } from "./useCountries";
import { List } from '../../components/List';
import { CountryCard } from '../../components/CountryCard';

const CountryList = () => {
    const navigate = useNavigate();

    const [countries, { error, status }] = useCountries();

    return (
        <>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <h2>Loading...</h2>}

            {status === 'received' && (
                <List>
                    {countries.map((country) => {
                        const countryInfo = {
                            img: country.flags.png,
                            name: country.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: country.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: country.region,
                                },
                                {
                                    title: 'Capital',
                                    description: country.capital,
                                },
                            ],
                        };

                        return (
                            <CountryCard
                                key={country.name}
                                onClick={() => navigate(`/country/${country.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    )
}

export { CountryList };
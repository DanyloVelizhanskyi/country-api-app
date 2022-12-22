import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CountriesList } from "../components/CountriesList";
import { ALL_COUNTRIES } from "../config";
import { CountryCard } from "../components/CountryCard";
import { Controls } from "../components/Controls";

export const HomePage = ({ countries, setCountries }) => {

    // const [countries, setCountries] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES)
                .then(({ data }) => setCountries(data));
    }, []);

    return (
        <>
            <Controls />
            <CountriesList>
                {countries.map(country => {
                    const countryInfo = {
                        img: country.flags.png,
                        name: country.name,
                        info: [
                            {
                                title: 'Population',
                                description: country.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: country.region
                            },
                            {
                                title: 'Capital',
                                description: country.capital
                            }
                        ],
                    };

                    return (
                        <CountryCard key={country.name} onClick={() => navigate(`/country/${country.name}`)} {...countryInfo} />
                    )
                })}
            </CountriesList>
        </>
    )
};
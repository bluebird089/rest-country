import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [flag, setFalg] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('Add this to the country')
        console.log(country);
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleFalg = flag => {
        console.log('Add Flag');
    }

    return (
        <>
            <h3>Countries: {countries.length}</h3>
            <dir>
                <h3>Visited Country: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(visitedCountry => <li key={visitedCountry.cca3}>{visitedCountry.name.common}</li>)
                    }
                </ul>
            </dir>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </>
    );
};

export default Countries;
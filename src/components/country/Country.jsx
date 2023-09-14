import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <p>Name: {name?.common}</p>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited && 'I have visited'}
        </div>
    );
};

export default Country;
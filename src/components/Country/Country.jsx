import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry,handleFlags}) => {
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className= {`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleFlags(country.flags.png)}>Add Flags</button> <br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited? `visited`: `going`}</button>
            {visited ? `i am visited`: `i want to visite`}
        </div>
    );
};

export default Country;
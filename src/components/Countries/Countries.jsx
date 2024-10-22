import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    const [countryVisited,setCountryVisited]=useState([]);
    const handleVisitedCountry = country =>{
        const newVisitedCountry = [...countryVisited,country]
        setCountryVisited(newVisitedCountry)
    }
    const [countryFlags,setCountryFlags] = useState([])
    const handleFlags = (flags) =>{
        console.log(flags);
        const newFlags = [...countryFlags,flags]
        setCountryFlags(newFlags)
    }
    return (
        <div>
                <h1>All countries Name:{countries.length}</h1>
                <div>
                    <h2>Visited Countries</h2>
                    <ul>
                            {
                                    countryVisited.map(country => <li>{country.name.common}</li>)
                            }
                    </ul>
                </div>
                <div className="country-Flags">
                    {
                        countryFlags.map(flag => <img src={flag}></img>)
                    }
                </div>
        <div className="country-Container">
            {
                countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry} handleFlags={handleFlags}></Country>)
            }
        </div>
        </div>
        
    );
};

export default Countries;
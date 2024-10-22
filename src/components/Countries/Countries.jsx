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
        console.log(country);
        console.log('add this visited country');
        const newVisitedCountry = [...countryVisited,country]
        setCountryVisited(newVisitedCountry)
    }
    return (
        <div>
                <h1>All countries:{countries.length}</h1>
                <div>
                    <h2>Visited Countries</h2>
                    <ul>
                            {
                                    countryVisited.map(country => <li>{country.name.common}</li>)
                            }
                    </ul>
                </div>
        <div className="country-Container">
            {
                countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
            }
        </div>
        </div>
        
    );
};

export default Countries;
import React from 'react'
import WeatherData from './WeatherData'

const Details = ({country}) => {
    return (
        <div>
           <h2>{country.name}</h2>
           <p>Capital: {country.capital}</p> 
           <p>Population: {country.population}</p>
           <h3>Language</h3>
           <ul>
               {country.languages.map(language=><li key ={language.name}>{language.name}</li>)}
           </ul>
           <img src= {country.flag} alt="flag" width="100" height="100"/>
           <WeatherData capital ={country.capital} />
        </div>
    )
}

export default Details

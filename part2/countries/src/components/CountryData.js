import React from 'react';
import Details from './Details'

const CountryData = ({ search, countries, onClick}) => {
    
   
  if (search === "") {
    return null;
  }

  if (countries.length > 10) {
    return <div>Too many countries, specify another one</div>
  }
  
  else if( countries.length === 1){
      return <Details country = {countries[0]} />
  }

  return (
    <div>
      {countries.map(country =>
      <div key={country.numericCode}>{country.name} <button onClick ={()=> onClick(country)}>Show</button></div>
      )}
    </div>)

}

export default CountryData;

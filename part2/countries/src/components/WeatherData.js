import React, { useState, useEffect} from 'react'
import axios from 'axios'
require('dotenv').config()

const WeatherData = ({capital}) => {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
        .then(response=>{
          //console.log(response.data)
        setWeather(response.data.current);
        })
        .catch(err=>{
            console.log(err);
        })

    },[capital,api_key])
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>temperature: {weather.temperature} &deg; C</p>
            <img src={weather.weather_icons[0]} alt="weatherIcon"/> 
            <p>Wind:{weather.wind_speed} mph, direction: {weather.wind_dir}</p>
        </div>
    )
}

export default WeatherData

import React, { useState } from 'react';
import { fetchWeather } from './WeatherMap';
import WeatherData from './WeatherModels';
import './style.css';

const Weather = () => {
const [city, setCity] = useState('');
const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

const handleFetchWeather = async () => {
const data = await fetchWeather(city);
setWeatherData(data);
};

return (
<div className="container mx-auto mt-8">
    <h1 className="text-3xl font-bold mb-4">Weather App</h1>
        <div className="flex mb-4">
            <input type="text"
            placeholder="Enter city"
            className="border p-2 rounded-l"
            value={city}
            onChange={(e) => setCity(e.target.value)}/>
            <button className="bg-blue-500 text-white p-2 rounded-r" onClick={handleFetchWeather}>
            Get Weather
            </button>
        </div>
    {weatherData && (
        <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Location: {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
        </div>
    )}
</div>
    );
};
export default Weather;
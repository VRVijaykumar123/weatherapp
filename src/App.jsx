import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';
import axios from 'axios';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (location) => {
    setLoading(true);
    try {
      const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar fetchWeatherData={fetchWeatherData} />
      {loading ? <p>Loading...</p> : <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ToggleButton from './components/ToggleButton';
import WeatherDetails from './components/WeatherDetails';
import './App.css';

const api={key:"f9fa5a06bef5ea04086067a6b5d9dda3"}

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
 
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const fetchWeather =  (query) => {
    try {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api.key}`)
       .then((res) => res.json())
       .then((result) => {
        setWeatherData(result)
       })
      
    } catch (error) {
      setWeatherData(null); // Clear any previous weather data
      alert("Error fetching the weather data. Please try again.");
    }
  };

  const handleSearch = (query) => {
    fetchWeather(query);
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app">
      <ToggleButton onToggle={handleToggle} isDarkMode={isDarkMode} />
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} />
      <WeatherDetails weatherData={weatherData} />
    </div>
  );
};

export default App;

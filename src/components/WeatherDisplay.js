import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Enter a location to get weather information.</div>;
  }

  const { name, main, weather } = weatherData;
  const temperature = Math.round(main.temp - 273.15); // Convert Kelvin to Celsius

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p>{new Date().toLocaleString()}</p>
      <p>Temperature: {temperature}°C</p>
      <p>{weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;

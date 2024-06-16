import React from 'react';

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) return null;

  const { main, wind } = weatherData;

  return (
    <div className="weather-details">
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDetails;

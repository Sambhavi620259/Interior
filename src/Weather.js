import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Clock from "react-live-clock";
import Icon from './Icon'; // Import your Icon component
import './Weather.css';

const apiKeys = {
  key: 'c0d573b18729da9019711dcbacf8458d',
  base: "https://api.openweathermap.org/data/2.5/",
};

const dateBuilder = (d) => {
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState("sun"); // Default to sun
  const [error, setError] = useState("");

  const search = useCallback((city) => {
    if (city.trim() === "") return; // Do not search if query is empty
    axios
      .get(`${apiKeys.base}weather?q=${city}&units=metric&APPID=${apiKeys.key}`)
      .then((response) => {
        setWeather(response.data);
        setQuery("");
        setIcon(getWeatherIcon(response.data.weather[0].main));
        setError(""); // Clear any previous error
      })
      .catch(() => {
        setError("City not found");
        setWeather({});
        setIcon("sun"); // Default icon in case of error
      });
  }, []);

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case "Haze":
      case "Clouds":
        return "cloud";
      case "Rain":
      case "Drizzle":
        return "rain";
      case "Snow":
        return "snow";
      case "Dust":
      case "Tornado":
        return "wind";
      case "Fog":
      case "Smoke":
        return "fog";
      default:
        return "sun"; // Default to sun if no matching condition
    }
  };

  useEffect(() => {
    search("Delhi"); // Default city
  }, [search]);

  return (
    <div className="weather-container">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search any city"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={(e) => e.key === 'Enter' && search(query)}
        />
        <div className="img-box">
          <img
            src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
            onClick={() => search(query)}
            alt="search"
          />
        </div>
      </div>
      {weather.main ? (
        <div className="city">
          <div className="title">
            <h2>{weather.name}</h2>
            <h3>{weather.sys.country}</h3>
          </div>
          <div className="mb-icon">
            <Icon name={icon} size={112} color="white" />
            <p>{weather.weather[0].main}</p>
          </div>
          <div className="date-time">
            <div className="current-time">
              <Clock format="HH:mm:ss" interval={1000} ticking={true} />
            </div>
            <div className="current-date">{dateBuilder(new Date())}</div>
            <div className="temperature">
              <p>
                {Math.round(weather.main.temp)}°<span>C</span>
              </p>
            </div>
          </div>
          <ul>
            <li>Humidity: {weather.main.humidity}%</li>
            <li>Visibility: {weather.visibility / 1000} km</li>
            <li>Wind Speed: {weather.wind.speed} km/h</li>
          </ul>
        </div>
      ) : (
        <div className="error-message">{error}</div>
      )}
    </div>
  );
};

export default Weather;

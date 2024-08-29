import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";


export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready:false});
  function handleResonse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      feels_like: response.data.main.feels_like,
      date: " Tuesday | 29th August",
      time: "5 O'Clock |"
    });
  }

  if (weatherData.ready) { return (
    <div>
    <form className="box-button" id="form">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            placeholder="Find your city"
            id="city-search"
          />
        </div>
        <div className="col-4">
          <input type="submit" className="button" value="Search" />
        </div>
      </div>
    </form>


    <h1 id="date">
      {weatherData.time}{weatherData.date}
    </h1>

    <div>
      <h2 id="cityInput">{weatherData.city}</h2>
      <div id="current-description" className="weather-description">
        <div className="text-capitalize">
        {weatherData.description}
        </div>
      </div>
    </div>

        <div className="middle-section">
        <div className="row">
          <div className="col-9">
          <ReactAnimatedWeather icon="CLEAR_DAY" color="black" size="90" animate={true} />
          </div>
          <span className="degrees-celsius">
            <thin id="temperature">
              <li className="degrees" id="temp">
                <p>{Math.round(weatherData.temperature)}</p>
              </li>
            </thin>
            <li className="degrees">
              <p className="celsius" id="celsius-link">
                °C
              </p>
            </li>
          </span>
        </div>
      </div>


        <ul>
        <li>
          <i class="fa-solid fa-droplet"></i>
          <span class="humidity" id="humidity">
            Humidity: {weatherData.humidity} %
          </span>
        </li>
        <li>
          <i class="fa-solid fa-temperature-quarter"></i>
          <span class="pressure" id="pressure">
            Feels like: {Math.round(weatherData.feels_like)}°C
          </span>
        </li>
        <li>
          <i class="fa-solid fa-wind"></i>
          <span class="wind" id="wind">
            {Math.round(weatherData.wind)} km/h
          </span>
        </li>
      </ul>
    </div>
  );
} else {
  const apiKey = "3e29a63c22228ff8f4a04b82fdde6e77";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResonse);
}



}

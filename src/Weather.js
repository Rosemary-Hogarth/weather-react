import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready:false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResonse(response) {
    console.log(response.data);
    const apiDate = new Date(response.data.dt * 1000);
    console.log("Date from API:", apiDate);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      feels_like: response.data.main.feels_like,
      date: apiDate,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "3e29a63c22228ff8f4a04b82fdde6e77";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResonse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search()

  }
function handleCityChange(event) {
    setCity(event.target.value);
}

  if (weatherData.ready) { return (
    <div>
    <form className="box-button" id="form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            placeholder="Find your city"
            id="city-search"
            onChange={handleCityChange}
            autoFocus="on"

          />
        </div>
        <div className="col-4">
          <input type="submit" className="button" value="Search" />
        </div>
      </div>
    </form>
    <WeatherInfo data={weatherData}/>
    <hr />
    <WeatherForecast  coordinates={weatherData.coordinates}/>
  </div>
  );
} else {
  search();
  return "Loading..."
}



}

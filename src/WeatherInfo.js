import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {


  return (
<div className="weatherInfo" >
    <h1 id="date">
    {console.log("Date being passed to Date component:", props.data.date)}
      <FormattedDate date={props.data.date} />
    </h1>

    <div>
      <h2 id="cityInput">{props.data.city}</h2>
      <div id="current-description" className="weather-description">
        <div className="text-capitalize">
        {props.data.description}
        </div>
      </div>
    </div>

        <div className="middle-section">
        <div className="row">
          <div className="col-9">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={100} color={"#000"}
              alt={props.data.description}/>
            </div>
          </div>
          <span className="degrees-celsius" id="temperature">
              <li className="degrees" id="temp">
              <WeatherTemperature celsius={props.data.temperature} />
              </li>

          </span>
        </div>
      </div>

      <div className="WeatherDetails">
        <ul>
        <li>
          <i className="fa-solid fa-droplet"></i>
          <span className="humidity" id="humidity">
            Humidity: {props.data.humidity} %
          </span>
        </li>
        <li>
          <i className="fa-solid fa-temperature-quarter"></i>
          <span className="pressure" id="pressure">
            Feels like: {Math.round(props.data.feels_like)}°C
          </span>
        </li>
        <li>
          <i className="fa-solid fa-wind"></i>
          <span className="wind" id="wind">
            {Math.round(props.data.wind)} km/h
          </span>
        </li>
      </ul>
    </div>
  </div>
  )
}

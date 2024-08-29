import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
<div className="weatherInfo">
    <h1 id="date">
    {console.log("Date being passed to Date component:", props.data.date)}
      <FormattedDate date={props.data.date}/>
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
          <ReactAnimatedWeather icon="CLEAR_DAY" color="black" size="90" animate={true} />
          </div>
          <span className="degrees-celsius">
            <thin id="temperature">
              <li className="degrees" id="temp">
                <p>{Math.round(props.data.temperature)}</p>
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
            Humidity: {props.data.humidity} %
          </span>
        </li>
        <li>
          <i class="fa-solid fa-temperature-quarter"></i>
          <span class="pressure" id="pressure">
            Feels like: {Math.round(props.data.feels_like)}°C
          </span>
        </li>
        <li>
          <i class="fa-solid fa-wind"></i>
          <span class="wind" id="wind">
            {Math.round(props.data.wind)} km/h
          </span>
        </li>
      </ul>
    </div>
  )

}

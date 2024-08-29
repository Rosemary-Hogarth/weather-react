import React from "react";

export default function WeatherDetails(props) {
  return (
    <ul>
      <li>
        <i class="fa-solid fa-droplet"></i>
        <span class="humidity" id="humidity">
          Humidity: {props.humidity} %
        </span>
      </li>
      <li>
        <i class="fa-solid fa-temperature-quarter"></i>
        <span class="pressure" id="pressure">
          Pressure: {props.pressure} mb
        </span>
      </li>
      <li>
        <i class="fa-solid fa-wind"></i>
        <span class="wind" id="wind">
          {props.wind} km/h
        </span>
      </li>
    </ul>
  );
}

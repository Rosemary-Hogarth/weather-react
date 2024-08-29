import React from "react";

export default function CityWeather(props) {
  return (
    <div>
      <h2 id="cityInput">{props.city}</h2>
      <div id="current-description" className="weather-description">
        {props.weather}
      </div>
    </div>
  );
}

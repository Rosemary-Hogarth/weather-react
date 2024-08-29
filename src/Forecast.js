import React from "react";

export default function Layout(props) {
  return (
    <div className="forecast" id="forecast">
      <div className="weather-forecast-date">{props.day}</div>

      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt=""
        className="forecast-icon"
      />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {props.maxTemp}°
        </span>
        <span className="weather-forecast-temperature-min">
          {props.minTemp}°
        </span>
      </div>
    </div>
  );
}

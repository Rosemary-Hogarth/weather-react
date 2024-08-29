import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Layout(props) {
  return (
    <div className="forecast" id="forecast">
      <div>
      <div className="weather-forecast-date">{props.day}</div>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#000"
        size={48}
        animate={true}
      />

    </div>

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

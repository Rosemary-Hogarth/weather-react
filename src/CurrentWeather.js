import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function CurrentWeather(props) {
  return (
    <div className="middle-section">
      <div className="row">
        <div className="col-9">
        <ReactAnimatedWeather icon="CLEAR_DAY" color="black" size="90" animate={true} />
        </div>
        <span className="degrees-celsius">
          <thin id="temperature">
            <li className="degrees" id="temp">
              <p>{props.degrees}</p>
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
  );
}

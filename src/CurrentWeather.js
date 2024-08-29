import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="middle-section">
      <div className="row">
        <div className="col-9">
          <img
            src=""
            id="icon"
            // className="fa-solid fa-circle sun-icon1"
            width="300"
            alt="weather icon"
          />
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

import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./style.css/WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    const dailyData = {}; // Object to store daily summaries by date
    const list = response.data.list;

    list.forEach((forecastItem) => {
      const date = new Date(forecastItem.dt * 1000);
      const day = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD

      // Initialize day if it doesn't exist in dailyData
      if (!dailyData[day]) {
        dailyData[day] = {
          date: day,
          temp: {
            min: forecastItem.main.temp,
            max: forecastItem.main.temp,
          },
          weather: forecastItem.weather[0],
        };
      } else {
        // Update min/max temperatures
        dailyData[day].temp.min = Math.min(dailyData[day].temp.min, forecastItem.main.temp);
        dailyData[day].temp.max = Math.max(dailyData[day].temp.max, forecastItem.main.temp);
      }
    });

    setForecast(Object.values(dailyData));
    setLoaded(true);
  }


  useEffect(() => {
    setLoaded(false); // Reset loaded state when coordinates change
  }, [props.coordinates]);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    // Updated API endpoint for 3-hour forecast
    let apiKey = "a96d891216c469dbedda660c3517d1ea";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

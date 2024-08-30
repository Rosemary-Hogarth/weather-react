import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";
import Footer from "./Footer";
import "./style.css/Weather.css"
import "./style.css/styles.css";
import "./style.css/WeatherInfo.css";
import "./style.css/WeatherTemperature.css";
import "./index.css";

export default function App() {
  const [temperature, setTemperature] = useState(null);

  function changeBackgroundColor(temp) {
    if (temp > 25) {
      return 'linear-gradient(243deg, rgb(255, 253, 221) 13.4%, rgb(248, 215, 215) 82.1%)';
    } else {
      return 'radial-gradient(circle at 10% 20%, rgb(215, 223, 252) 0%, rgb(255, 255, 255) 0%, rgb(215, 223, 252) 84%)';
    }
  };

  function updateTemperature(newTemp) {
    setTemperature(newTemp);
  }

  return (
    <div className="App">

    <div className="container" style={{ background: changeBackgroundColor(temperature) }}>
        <Weather defaultCity="Berlin" onTemperatureUpdate={updateTemperature}/>
        <Footer />
        </div>
    </div>
  );
}

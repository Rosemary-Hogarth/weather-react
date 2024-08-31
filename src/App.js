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
      return 'linear-gradient(113.5deg, rgb(234, 234, 234) 22.3%, rgb(201, 234, 211) 56.6%, rgb(255, 180, 189) 90.9%)';
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

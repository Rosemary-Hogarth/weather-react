import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

import Footer from "./Footer";

import "./style.css/Weather.css"
import "./style.css/styles.css";

import "./style.css/WeatherInfo.css";
import "./style.css/WeatherTemperature.css";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">

        <Weather defaultCity="Glasgow"/>
        <Footer />
      </div>
    </div>
  );
}

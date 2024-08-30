import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";
import Layout from "./Layout";
import Footer from "./Footer";
import Forecast from "./Forecast";
import "./style.css/Weather.css"
import "./style.css/styles.css";
import "./style.css/Forecast.css";
import "./style.css/Layout.css";
import "./style.css/WeatherInfo.css";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Layout />
        <Weather defaultCity="Glasgow"/>
        <br />
        <hr />
        <div className="forecast-container">
          <Forecast day="Wed" maxTemp={27} minTemp={15} />
          <Forecast day="Thu" maxTemp={28} minTemp={17} />
          <Forecast day="Fri" maxTemp={25} minTemp={10} />
          <Forecast day="Sat" maxTemp={22} minTemp={10} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

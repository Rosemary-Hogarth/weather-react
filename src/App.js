import Search from "./Search";
import Date from "./Date";
import Layout from "./Layout";
import CityWeather from "./CityWeather";
import CurrentWeather from "./CurrentWeather";
import WeatherDetails from "./WeatherDetails";
import Footer from "./Footer";
import Forecast from "./Forecast";
import "./style.css/Search.css"
import "./style.css/Date.css";
import "./style.css/styles.css";
import "./style.css/CityWeather.css";
import "./style.css/Forecast.css";
import "./style.css/CurrentWeather.css";
import "./style.css/Layout.css";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Layout />
        <Search />
        <Date time={8} day="Tuesday" date="27th August" />
        <CityWeather city="Berlin" weather="Sunny" />
        <br />
        <CurrentWeather degrees={30} />
        <WeatherDetails humidity={20} pressure={30} wind={29} />
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

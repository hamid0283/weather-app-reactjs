import cloud from "../assets/icons/cloud.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import sun from "../assets/icons/sun.png";
import wind from "../assets/icons/wind.png";
import waterDrop from "../assets/icons/water-drop.png";
import { CityProp } from "../App";

interface WeatherProp {
  cityProp: CityProp;
}

const Weather = ({ cityProp }: WeatherProp) => {
  console.log(cityProp);
  let icon: string = sun;
  switch (cityProp.image) {
    case "Clouds":
      icon = cloud;
      break;
    case "Clear":
      icon = sun;
      break;
    case "Rain":
      icon = rain;
      break;
    case "Snow":
      icon = snow;
  }
  return (
    <div className="information">
      <div className="temperature">
        <span className="city-name">{cityProp.name}</span>
        <img src={icon} alt="" />
        <span className="temp">{cityProp.temp}°c</span>
      </div>
      <div className="info-seprator"></div>
      <div className="wind-rain">
        <div className="wind">
          <img src={wind} alt="wind" />
          <span>{cityProp.speed} km/h</span>
        </div>
        <div className="rain">
          <img src={waterDrop} alt="water drop" />
          <span>{cityProp.humidity}</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;

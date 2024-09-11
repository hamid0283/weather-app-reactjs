import cloud from "../assets/icons/cloud.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import sunCloud from "../assets/icons/sun-cloud.png";
import sun from "../assets/icons/sun.png";
import wind from "../assets/icons/wind.png";
import waterDrop from "../assets/icons/water-drop.png";

const Weather = () => {
  return (
    <div className="information">
      <div className="temperature">
        <span className="city-name">Tehran</span>
        <img src={sun} alt="" />
        <span className="temp">32°c</span>
      </div>
      <div className="wind-rain">
        <div className="wind">
          <img src={wind} alt="wind" />
          <span>2.3 km/h</span>
        </div>
        <div className="rain">
          <img src={waterDrop} alt="water drop" />
          <span>3%</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;

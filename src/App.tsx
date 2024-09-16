import { Dispatch, SetStateAction, useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";

export interface CityProp {
  name: string;
  image: string;
  temp: number;
  speed: number;
  humidity: number;
}

const App = () => {
  const [cityProp, setCityProp]: [
    CityProp,
    Dispatch<SetStateAction<CityProp>>
  ] = useState({
    name: "tehran",
    image: "sun",
    temp: 32,
    speed: 2.3,
    humidity: 5,
  });
  return (
    <div className="main">
      <Search setCityProp={setCityProp} />
      <Weather cityProp={cityProp} />
    </div>
  );
};

export default App;

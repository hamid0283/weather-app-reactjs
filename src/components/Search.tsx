import { Dispatch, SetStateAction, useEffect, useState } from "react";
import searchIcon from "../assets/icons/search.png";
import { CityProp } from "../App";

interface WeatherData {
  name: string;
  weather: { main: string }[];
  main: { temp: number; humidity: number };
  wind: { speed: number };
}

interface SearchProp {
  setCityProp: Dispatch<SetStateAction<CityProp>>;
}

const Search = ({ setCityProp }: SearchProp) => {
  const [city, setCity]: [string, Dispatch<SetStateAction<string>>] =
    useState("Isfahan");
  function handleChange(): void {
    const input = document.getElementById("input") as HTMLInputElement | null;
    if (input) {
      setCity(input.value);
      input.value = "";
    }
  }
  useEffect(() => {
    if (city) {
      search();
    }
  }, [city]);
  const search = async () => {
    try {
      const response: Response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const cityData: WeatherData = await response.json();
      console.log(cityData);
      if (response.ok) {
        setCityProp({
          name: cityData.name,
          image: cityData.weather[0].main,
          temp: Math.floor(cityData.main.temp - 273.15),
          speed: cityData.wind.speed,
          humidity: cityData.main.humidity,
        });
      }
    } catch (error) {}
  };
  return (
    <div className="input-box">
      <input id="input" type="text" placeholder="Search" />
      <button onClick={handleChange}>
        <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

export default Search;

import Search from "./components/search/Search";
import Currentweather from "./components/current-weather/Currentweather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import './App.css';
import { useState } from "react";

function App() {

  const [currentweather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setForecast({city: searchData.label, ...forecastResponse});

      })
      .catch((err) => console.log(err));
  }

  console.log(currentweather);
  console.log(forecast);
  
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentweather && <Currentweather data={currentweather} />}
    </div>
  );
}

export default App;

import Search from "./components/search/Search";
import Currentweather from "./components/current-weather/Currentweather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import './App.css';

function App() {

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
      })
  }
  
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
      <Currentweather />
    </div>
  );
}

export default App;

import Search from "./components/search/Search";
import Currentweather from "./components/current-weather/Currentweather";
import './App.css';

//23:42

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
      <Currentweather />
    </div>
  );
}

export default App;

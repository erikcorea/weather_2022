import Search from "./components/search/Search";
import './App.css';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;

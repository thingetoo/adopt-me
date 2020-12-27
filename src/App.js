import "./App.css";
import DataFetching from "./Components/DataFetching";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <DataFetching />
    </div>
  );
}

export default App;

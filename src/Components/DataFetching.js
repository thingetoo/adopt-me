import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";

import "./DataFetching.css";

function DataFetching() {
  const [animals, setAnimals] = useState([]);
  const [search, setSearch] = useState("");
  const url =
    "https://api.rescuegroups.org/v5/public/animals/search/available/dogs/?limit=50";
  const apiKey = "gB1Bhyy4";
  const headers = {
    "Content-Type": "application/vnd.api+json;charset=UTF-8",
    Authorization: apiKey,
  };

  useEffect(() => {
    axios
      .get(url, { headers })
      .then((res) => {
        console.log(res.data.data);
        setAnimals(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const filteredAnimals = animals.filter((animal) =>
    animal.attributes.breedPrimary.toLowerCase().includes(search.toLowerCase())
  );
  function handleChange(e) {
    setSearch(e.target.value);
  }

  if (filteredAnimals.length === 0) {
    return (
      <div className="fetch">
        <SearchBar handleChange={handleChange} placeholder="search breeds" />
        <h1 style={{ textAlign: "center" }}>Loading results...</h1>
      </div>
    );
  }

  return (
    <div className="fetch">
      <SearchBar handleChange={handleChange} placeholder="search breeds" />
      <div className="dog-container">
        {filteredAnimals.map((animal) => (
          <div className="card" key={animal.id}>
            <img
              src={animal.attributes.pictureThumbnailUrl}
              alt={animal.attributes.breedPrimary}
            />
            <h4>{animal.attributes.breedPrimary}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataFetching;

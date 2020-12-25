import React, { useState, useEffect } from "react";
import axios from "axios";

import "./DataFetching.css";

function DataFetching() {
  const [animals, setAnimals] = useState([]);
  const url =
    "https://api.rescuegroups.org/v5/public/animals/search/available/dogs/?limit=20";
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
  return (
    <div className="dog-container">
      {animals.map((animal) => (
        <div className="card" key={animal.id}>
          <img
            src={animal.attributes.pictureThumbnailUrl}
            alt={animal.attributes.breedPrimary}
          />
          <h4>{animal.attributes.breedPrimary}</h4>
        </div>
      ))}
    </div>
  );
}

export default DataFetching;

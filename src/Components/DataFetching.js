import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [animals, setAnimals] = useState([]);
  const url =
    "https://api.rescuegroups.org/v5/public/animals/search/available/dogs/?limit=10";
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
    <div className="container">
      <ul>
        {animals.map((animal) => (
          <div className="card" key={animal.id}>
            <img
              src={animal.attributes.pictureThumbnailUrl}
              alt={animal.attributes.breedPrimary}
            />
            <p>{animal.attributes.descriptionText}</p>
            <div>{animal.attributes.breedPrimary}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;

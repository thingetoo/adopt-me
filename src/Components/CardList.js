import "./CardList.css";
import { Card } from "./Card";

export const CardList = ({ filteredAnimals }) => (
  <div className="dog-container">
    {filteredAnimals.map((animal) => (
      <Card animal={animal} />
    ))}
  </div>
);

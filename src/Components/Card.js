import "./Card.css";

export function Card({ animal }) {
  return (
    <div className="card" key={animal.id}>
      <img
        src={animal.attributes.pictureThumbnailUrl}
        alt={animal.attributes.breedPrimary}
      />
      <h4>{animal.attributes.breedPrimary}</h4>
    </div>
  );
}

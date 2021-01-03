import "./Card.css";

export function Card({ animal }) {
  const fixJSON = (str) => str.replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");
  return (
    <div className="card" key={animal.id}>
      <img
        src={animal.attributes.pictureThumbnailUrl}
        alt={animal.attributes.breedPrimary}
      />
      <h4>{animal.attributes.breedPrimary}</h4>
      <h5>{animal.attributes.sex}</h5>
      <h6>{fixJSON(`${animal.attributes.descriptionText}`)}</h6>
      <h5>
        {animal.attributes.ageString ? animal.attributes.ageString : "N/A"}
      </h5>
    </div>
  );
}

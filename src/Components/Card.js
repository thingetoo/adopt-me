import "./Card.css";

export function Card({ animal }) {
  const fixJSON = (str) =>
    str
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&quot;/g, '"')
      .replace(/&rsquo;/g, "'")
      .replace(/&lsquo;/g, "'");
  const trunicateStr = (str) => str.slice(0, 500) + "...";
  return (
    <div className="card" key={animal.id}>
      <img
        src={animal.attributes.pictureThumbnailUrl}
        alt={animal.attributes.breedPrimary}
      />
      <h4>{animal.attributes.breedPrimary}</h4>
      <h5>{animal.attributes.sex}</h5>
      <h5>
        Age: {animal.attributes.ageString ? animal.attributes.ageString : "N/A"}
      </h5>
      <h6>{trunicateStr(fixJSON(`${animal.attributes.descriptionText}`))}</h6>
    </div>
  );
}

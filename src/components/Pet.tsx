import { IPet } from "@/app/APIResponsesTypes";
import "./styles/pet.css";

const Pet = (props: IPet) => {
  const { name, animal, breed, images, location } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images?.length) {
    hero = images[0];
  }

  return (
    <div className="pet">
      <div className="pet__img">
        <img src={hero} alt={name} />
      </div>
      <div className="pet__info">
        <h2>{name}</h2>
        <h3>{`${animal}` }</h3>
        <h3>{`${breed}` }</h3>
        <h3>{`${location}` }</h3>
      </div>
    </div>
  );
};

export default Pet;

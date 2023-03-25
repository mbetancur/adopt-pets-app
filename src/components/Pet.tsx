import "./styles/pet.css";

interface IProps {
  name: string;
  animal: string;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet = (props: IProps) => {
  const { name, animal, breed, images, location } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images?.length) {
    hero = images[0];
  }

  return (
    <div className="container_pet">
      <div className="container_pet__img">
        <img src={hero} alt={name} />
      </div>
      <div className="container_pet__info">
        <h2>{name}</h2>
        <h3>{`${animal}` }</h3>
        <h3>{`${breed}` }</h3>
        <h3>{`${location}` }</h3>
      </div>
    </div>
  );
};

export default Pet;

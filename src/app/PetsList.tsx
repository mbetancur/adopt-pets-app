import Pet from "@/components/Pet";

export default function PetsList(props) {
  return (
    <>
      <h2>List of Pets:</h2>
      {props.pets.map((pet) => (
        <Pet
          animal={pet.animal}
          key={pet.id}
          name={pet.name}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
        />
      ))}
    </>
  );
}

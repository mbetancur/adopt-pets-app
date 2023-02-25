import Pet from "@/components/Pet";
import { IPet } from "./APIResponsesTypes";

export default function PetsList({ pets }: { pets: IPet[] }) {
  return (
    <>
      <h2>List of Pets:</h2>
      {pets.map((pet) => (
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

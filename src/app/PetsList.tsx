import Pet from "@/components/Pet";
import Link from "next/link";
import { IPet } from "./APIResponsesTypes";

export default function PetsList({ pets }: { pets: IPet[] }) {
  return (
    <>
      <h2>List of Pets:</h2>
      {pets.map((pet) => (
        <Link key={pet.id} href={`/adopta/${pet.name}`}>
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        </Link>
      ))}
    </>
  );
}

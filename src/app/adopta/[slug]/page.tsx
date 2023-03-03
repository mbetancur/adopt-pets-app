import { PetAPIResponse } from "@/app/APIResponsesTypes";
import { fetchPetByName } from "@/app/fetchPet";
import Pet from "@/components/Pet";

const getPet = (petName: string): Promise<PetAPIResponse> => {
  return fetchPetByName(petName);
};

interface petParams {
  params: {
    slug: string;
  };
}

// TODO: catch the error if a no existing pet is trying to be rendered
export default async function adoptaPet({ params }: petParams) {
  const { slug } = params;
  const data = await getPet(slug);
  const pet = data.pets[0];

  return (
    <>
      Adopta a:
      <Pet
        animal={pet.animal}
        key={pet.id}
        name={pet.name}
        breed={pet.breed}
        images={pet.images}
        location={`${pet.city}, ${pet.state}`}
        id={pet.id}
      />
    </>
  );
}

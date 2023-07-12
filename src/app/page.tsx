import styles from "./page.module.css";
import Pet from "@/components/Pet";
import { fetchPetById } from "./services/fetchPet";
import { PetAPIResponse } from "./services/APIResponsesTypes";
import "./styles/page.css";
import PetsSection from "./PetsSection";

// const inter = Inter({ subsets: ["latin"] }); // TODO: Investigate about this

const getPet = (idFirstPet = 1): Promise<PetAPIResponse> => {
  return fetchPetById(idFirstPet);
};

export default async function Home() {
  // TODO: make this request only to get 1 pet
  const data = await getPet();
  const pet = data.pets[0];

  return (
    <main className={styles.main}>
      <h1>Welcome to adopt a Pet</h1>
      <Pet
        animal={pet.animal}
        key={pet.id}
        name={pet.name}
        breed={pet.breed}
        images={pet.images}
        location={`${pet.city}, ${pet.state}`}
        id={pet.id}
        city={pet.city}
        description={pet.description}
        state={pet.state}
      />
      <PetsSection />
    </main>
  );
}

import styles from "./page.module.css";
import Pet from "@/components/Pet";
import { fetchPets } from "./fetchPet";
import { PetAPIResponse } from "./APIResponsesTypes";
import './styles/page.css'

// const inter = Inter({ subsets: ["latin"] }); // TODO: Investigate about this

const getPets = () => {
  return fetchPets();
};

export default async function Home() {
  // TODO: make this request only to get 1 pet
  // why do I need the as. Alternative to this ?
  const data = (await getPets()) as PetAPIResponse;
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
      />
    </main>
  );
}

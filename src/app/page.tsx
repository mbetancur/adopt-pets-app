import styles from "./page.module.css";
import Pet from "@/components/Pet";
import { fetchPets } from "./fetchPet";
import { Animal } from "./APIResponsesTypes";
const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

// const inter = Inter({ subsets: ["latin"] }); // TODO: Investigate about this

const getPets = async () => {
  return await fetchPets();
};

export default async function Home() {
  // TODO: make this request only to get 1 pet
  const data = await getPets();
  const pet = data.pets[0];

  return (
    <main className={styles.main}>
      <div>This is the landing page</div>
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

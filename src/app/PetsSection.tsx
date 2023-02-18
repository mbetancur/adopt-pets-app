"use client";

import { useState } from "react";
import { fetchFilterPets } from "./fetchPet";
import PetsFilter from "./PetsFilter";
import PetsList from "./PetsList";

// TODO: search for benefits of making this a page or other instead a "section"
export default function PetsSection() {
  const [pets, setPets] = useState([]);

  //TODO : does the scope change within fn outside of the component declaration?
  // consider making one fetch of all the data at the begining of the flow and only filter pets in state
  const sendData = async (data) => {
    const res = await fetchFilterPets(data.animal, data.location, data.breed);
    setPets(res.pets);
  };

  return (
    <section>
      <PetsFilter sendData={sendData}></PetsFilter>
      <PetsList pets={pets}></PetsList>
    </section>
  );
}

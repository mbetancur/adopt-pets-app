"use client";

import { useState } from "react";
import { IPet, PetAPIResponse } from "./APIResponsesTypes";
import { fetchFilterPets } from "./fetchPet";
import PetsFilter from "./PetsFilter";
import PetsList from "./PetsList";

export interface IReqPetParams {
  animal: string;
  location: string;
  breed: string;
}

// TODO: search for benefits of making this a whole new page or other next feature instead of a "section"
export default function PetsSection() {
  const [pets, setPets] = useState<IPet[]>([]);

  //TODO : does the scope change within fn outside of the component declaration?
  // consider making one fetch of all the data at the begining of the flow and only filter pets in state
  const sendData = (data: IReqPetParams) => {
    const { animal, location, breed } = data;
    // OMG how can I make the lintker works with an async/await implementation?
    // const res = (await fetchFilterPets(
    //   animal,
    //   location,
    //   breed
    // )) as PetAPIResponse;
    // setPets(res.pets);
    fetchFilterPets(animal, location, breed)
      .then((res: PetAPIResponse) => setPets(res.pets))
      .catch((e) => console.log(e));
  };

  return (
    <section>
      <PetsFilter sendData={sendData}></PetsFilter>
      <PetsList pets={pets}></PetsList>
    </section>
  );
}

import React, { useState } from "react";
import { IReqPetParams } from "./PetsSection";

interface IPetsFilter {
  sendData: (data: IReqPetParams) => void;
}

export default function PetsFilter({ sendData }: IPetsFilter) {
  const [petReqParams, setPetReqParams] = useState({
    animal: "",
    location: "",
    breed: "",
  });

  const findPet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendData(petReqParams);
  };

  const handleInputPet = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement; // Why is this casted needed?
    setPetReqParams({
      ...petReqParams,
      [target.name]: target.value,
    });
  };

  return (
    //TODO: validate for better implementation of react forms
    <>
      <h1>Looking for a pet?</h1>
      <form onSubmit={findPet}>
        <input name="animal" onChange={handleInputPet} />
        <input name="location" onChange={handleInputPet} />
        <input name="breed" onChange={handleInputPet} />
        <button>Submit</button>
      </form>
    </>
  );
}

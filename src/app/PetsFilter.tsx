import React, { useState } from "react";
import { IReqPetParams } from "./PetsSection";
import "./styles/petsFilter.css";

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

  const handleSelectPet = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement; // Why is this casted needed?
    setPetReqParams({
      ...petReqParams,
      [target.name]: target.value,
    });
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
    <div className="container_pet__form">
      <h1>Looking for a pet?</h1>
      <form onSubmit={findPet} className="container_pet__form-inputs">
        <label htmlFor="animal">Type Animal</label>
        <select name="animal" id="animal" onChange={handleSelectPet}>
          <option defaultValue="" disabled hidden>Choose a pet</option>
          <option value="dog">Dog 🐕 </option>
          <option value="cat">Cat 🐈 </option>
          <option value="bird">Bird 🐦 </option>
          <option value="rabbit">Rabbit 🐇 </option>
          <option value="reptile">Reptile 🐍 </option>
        </select>
        {/* <input name="animal" id="animal" onChange={handleInputPet} /> */}
        <label htmlFor="location">Location</label>
        <input name="location" id="location" onChange={handleInputPet} />
        <label htmlFor="breed">breed</label>
        <input name="breed" id="breed" onChange={handleInputPet} />
        <button>Submit</button>
      </form>
    </div>
  );
}

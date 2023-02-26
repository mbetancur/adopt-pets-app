import React, { useState } from "react";
import { IReqPetParams } from "./PetsSection";
import './styles/PetsFilter.css';

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
    <div className="petContainerForm">
      <h1>Looking for a pet?</h1>
      <form onSubmit={findPet} className='petForm'>
        <label for="animal">Type Animal</label>        
        <input name="animal" id="animal" onChange={handleInputPet} />
        <label for="location">Location</label>
        <input name="location" id="location" onChange={handleInputPet} />
        <label for="breed">breed</label>
        <input name="breed" id="breed" onChange={handleInputPet} />
        <button>Submit</button>
      </form>
    </div>
  );
}

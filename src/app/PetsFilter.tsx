import { useState } from "react";

export default function PetsFilter(props) {
  const [petRequestParams, setPetRequestParams] = useState({
    animal: "",
    location: "",
    breed: "",
  });

  const findPet = (e) => {
    e.preventDefault();
    props.sendData(petRequestParams);
  };

  const handleInputPet = (e) => {
    setPetRequestParams({
      ...petRequestParams,
      [e.target.name]: e.target.value,
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

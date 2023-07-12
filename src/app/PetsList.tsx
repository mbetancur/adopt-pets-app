import React, { useState } from "react";
import Modal from "@/components/Modal";
import Pet from "@/components/Pet";
import Link from "next/link";
import { IPet } from "./services/APIResponsesTypes";
import "./styles/petsList.css";

const PetsList = ({ pets }: { pets: IPet[] }) => {
  const [selectedPet, setSelectedPet] = useState<IPet | null>(null);
  const handleCloseModal = () => setSelectedPet(null);

  return (
    <>
      <h2>List of Pets:</h2>
      <div className="pet__list">
        {pets.map((pet) => (
          <div key={pet.id} onClick={() => setSelectedPet(pet)}>
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
          </div>
        ))}
      </div>
      {selectedPet && (
        <Modal onClose={handleCloseModal}>
          <Pet
            animal={selectedPet.animal}
            key={selectedPet.id}
            name={selectedPet.name}
            breed={selectedPet.breed}
            images={selectedPet.images}
            location={`${selectedPet.city}, ${selectedPet.state}`}
            id={selectedPet.id}
            city={selectedPet.city}
            description={selectedPet.description}
            state={selectedPet.state}
          />
        </Modal>
      )}
    </>
  );
};

export default PetsList;

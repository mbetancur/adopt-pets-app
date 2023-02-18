"use client";

import PetsFilter from "./PetsFilter";
import PetsList from "./PetsList";

// TODO: search for benefits of making this a page or other instead a "section"
export default function PetsSection() {
  return (
    <section>
      <PetsFilter></PetsFilter>
      <PetsList></PetsList>
    </section>
  );
}

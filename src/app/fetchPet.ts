import { PetAPIResponse } from "./APIResponsesTypes";

export const fetchPets = async (): Promise<PetAPIResponse> => {
  const data = await fetch(`http://pets-v2.dev-apis.com/pets`);
  return data.json() as Promise<PetAPIResponse>;
};
// Should we force this to return a json value?
export const fetchFilterPets = async (animal:string, location:string, breed:string): Promise<PetAPIResponse> => {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    return res.json() as Promise<PetAPIResponse>;
};

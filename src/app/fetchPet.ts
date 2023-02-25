export const fetchPets = async () => {
  const data = await fetch(`http://pets-v2.dev-apis.com/pets`);
  return data.json();
};
// Should we force this to return a json value?
export const fetchFilterPets = async (animal:string, location:string, breed:string) => {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    return res.json()
};

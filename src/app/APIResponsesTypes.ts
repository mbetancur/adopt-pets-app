export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface IPet {
  animal: Animal;
  breed: string;
  city: string;
  description: string;
  id: number;
  images: string[];
  location: string;
  name: string;
  onClick?: () => void;
  state: string;
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: IPet[];
}
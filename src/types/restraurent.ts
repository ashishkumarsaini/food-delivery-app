import { Dish } from "./dish";

export type Restraurent = {
  id: string;
  name: string;
  image: string;
  location: string;
  isOpen: boolean;
  dishes: Dish[];
};

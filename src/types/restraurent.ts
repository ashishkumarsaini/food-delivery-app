import { Dish } from "./dish";

export type Restraurent = {
  id: string;
  name: string;
  location: string;
  isOpen: boolean;
  dishes: Dish[];
};
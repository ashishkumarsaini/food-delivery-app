export type DishType = "veg" | "non-veg";

export type Dish = {
  id: string;
  name: string;
  image: string;
  price: number;
  deliveryTime: string;
  description: string;
  type: DishType;
  available: boolean;
};

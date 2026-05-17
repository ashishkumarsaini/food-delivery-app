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

export type Restraurent = {
  id: string;
  name: string;
  location: string;
  isOpen: boolean;
  dishes: Dish[];
};

export const RESTRAURENTS: Restraurent[] = [
  {
    id: "spice-garden",
    name: "Spice Garden",
    location: "Sector 17, Chandigarh",
    isOpen: true,
    dishes: [
      {
        id: "spice-garden-paneer-tikka-bowl",
        name: "Paneer Tikka Bowl",
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80",
        price: 249,
        deliveryTime: "25-30 min",
        description: "Smoky paneer tikka served with rice, salad, and mint chutney.",
        type: "veg",
        available: true,
      },
      {
        id: "spice-garden-butter-chicken",
        name: "Butter Chicken",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
        price: 329,
        deliveryTime: "30-35 min",
        description: "Tender chicken simmered in creamy tomato gravy with warm spices.",
        type: "non-veg",
        available: true,
      },
      {
        id: "spice-garden-dal-makhani",
        name: "Dal Makhani",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
        price: 219,
        deliveryTime: "25-30 min",
        description: "Slow-cooked black lentils finished with butter and cream.",
        type: "veg",
        available: false,
      },
    ],
  },
  {
    id: "urban-bites",
    name: "Urban Bites",
    location: "Model Town, Ludhiana",
    isOpen: true,
    dishes: [
      {
        id: "urban-bites-classic-veg-burger",
        name: "Classic Veg Burger",
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
        price: 179,
        deliveryTime: "20-25 min",
        description: "Crispy vegetable patty with lettuce, cheese, and house sauce.",
        type: "veg",
        available: true,
      },
      {
        id: "urban-bites-peri-peri-chicken-wrap",
        name: "Peri Peri Chicken Wrap",
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
        price: 229,
        deliveryTime: "20-25 min",
        description: "Spicy grilled chicken wrapped with crunchy vegetables and mayo.",
        type: "non-veg",
        available: true,
      },
      {
        id: "urban-bites-loaded-fries",
        name: "Loaded Fries",
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80",
        price: 159,
        deliveryTime: "15-20 min",
        description: "Golden fries topped with cheese sauce, herbs, and chili flakes.",
        type: "veg",
        available: true,
      },
    ],
  },
  {
    id: "sushi-street",
    name: "Sushi Street",
    location: "Cyber Hub, Gurugram",
    isOpen: false,
    dishes: [
      {
        id: "sushi-street-avocado-maki",
        name: "Avocado Maki",
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=900&q=80",
        price: 299,
        deliveryTime: "35-40 min",
        description: "Fresh avocado rolls with sushi rice, nori, soy, and wasabi.",
        type: "veg",
        available: true,
      },
      {
        id: "sushi-street-salmon-nigiri",
        name: "Salmon Nigiri",
        image:
          "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=900&q=80",
        price: 449,
        deliveryTime: "35-40 min",
        description: "Silky salmon slices over seasoned rice with pickled ginger.",
        type: "non-veg",
        available: false,
      },
      {
        id: "sushi-street-chicken-katsu-don",
        name: "Chicken Katsu Don",
        image:
          "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=80",
        price: 379,
        deliveryTime: "40-45 min",
        description: "Crispy chicken cutlet over rice with sweet-savory katsu sauce.",
        type: "non-veg",
        available: true,
      },
    ],
  },
];

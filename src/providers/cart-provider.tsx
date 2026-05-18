import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";
import { Dish } from "../types/dish";

export type CartItem = {
  id: string;
  restraurentId: string;
  dish: Dish;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (restraurentId: string, dish: Dish) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (restraurentId: string, dish: Dish) => {
    const itemId = `${restraurentId}:${dish.id}`;

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === itemId);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...currentItems,
        {
          id: itemId,
          restraurentId,
          dish,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + item.dish.price * item.quantity, 0);

    return {
      items,
      itemCount,
      subtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};

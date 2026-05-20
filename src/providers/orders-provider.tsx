import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";
import { CartItem } from "./cart-provider";

export type Order = {
  id: string;
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
  status: "Preparing" | "On the way" | "Delivered";
};

type CreateOrderInput = {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
};

type OrdersContextValue = {
  orders: Order[];
  addOrder: (order: CreateOrderInput) => Order;
  clearOrders: () => void;
};

const OrdersContext = createContext<OrdersContextValue | null>(null);

export const OrdersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = ({ items, subtotal, deliveryFee, total }: CreateOrderInput) => {
    const order: Order = {
      id: `order-${Date.now()}`,
      items: items.map((item) => ({ ...item, dish: { ...item.dish } })),
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      deliveryFee,
      total,
      createdAt: new Date().toISOString(),
      status: "Preparing",
    };

    setOrders((currentOrders) => [order, ...currentOrders]);

    return order;
  };

  const clearOrders = () => {
    setOrders([]);
  };

  const value = useMemo(
    () => ({
      orders,
      addOrder,
      clearOrders,
    }),
    [orders],
  );

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};

export const useOrders = () => {
  const context = useContext(OrdersContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrdersProvider");
  }

  return context;
};

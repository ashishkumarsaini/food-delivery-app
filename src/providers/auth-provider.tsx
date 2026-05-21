import React, { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { getValueFromStorage, saveValueToStorage } from "../lib/storage";

export type AuthUser = {
  name: string;
  email: string;
  password: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const user = await getValueFromStorage<AuthUser | null>('loggedInUser');
      if (user) {
        setUser(user);
      }
    }
    checkUser();
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login: setUser,
      logout: async () => {
        await saveValueToStorage('isNewUser', false);
        await saveValueToStorage('loggedInUser', null);
        await saveValueToStorage('isNewUser', false);
        setUser(null)
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};

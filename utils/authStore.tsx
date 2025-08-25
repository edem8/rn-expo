import { deleteItemAsync, getItem, setItem } from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  isLoggedIn: boolean;
  shouldCreateAccount: boolean;
  isAdmin: boolean;
};

type UserActions = {
  login: () => void;
  logout: () => void;
  adminLogin: () => void;
};

export const useAuthStore = create<UserState & UserActions>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      shouldCreateAccount: false,
      isAdmin: false,
      login: () =>
        set(() => ({
          isLoggedIn: true,
        })),
      adminLogin: () =>
        set(() => ({
          isAdmin: true,
          isLoggedIn:true
        })),
      logout: () =>
        set(() => ({
          isLoggedIn: false,
        })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
);

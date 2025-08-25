import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const storeAuthState = async (newState: { isLoggedIn: boolean }) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem("auth-key", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const login = () => {
    setIsLoggedIn(true);
    storeAuthState({ isLoggedIn: true });
    router.replace("/");
  };

  const logout = () => {
    setIsLoggedIn(false);
    storeAuthState({ isLoggedIn: false });
    router.replace("/login");
  };

  useEffect(() => {
    const getAuthFromStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("auth-key");
        if (jsonValue != null) {
          const auth = JSON.parse(jsonValue);
          setIsLoggedIn(auth);
        }
      } catch (e) {
        console.log(`Error fetching data from storage: ${e}`);
      }

      setIsReady(true);
    };
    getAuthFromStorage();
  }, []);
  return (
    <AuthContext.Provider value={{ isReady, isLoggedIn, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}

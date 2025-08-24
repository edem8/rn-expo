import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const login = () => {
    setIsLoggedIn(true);
    router.replace("/");
  };

  const logout = () => {
    setIsLoggedIn(false);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}

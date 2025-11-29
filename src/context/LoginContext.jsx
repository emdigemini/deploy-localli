import { createContext, useState } from "react";

export const CheckLogin = createContext();

export function CheckLoginProvider({ children }) {
  const [ isLogin, setIsLogin ] = useState(false);

  return (
    <CheckLogin.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </CheckLogin.Provider>
  );
}
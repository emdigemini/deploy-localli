import { createContext, useState } from "react";

export const LoadingData = createContext();

export function LoadingProvider({ children }){
  const [ isLoaded, setIsLoaded ] = useState(false);

  return (
    <LoadingData.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadingData.Provider>
  )
}
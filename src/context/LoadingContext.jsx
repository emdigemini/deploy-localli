import { createContext, useState } from "react";

export const LoadingData = createContext();

export function LoadingProvider({ children }){
  const [ isRefresh, setIsRefresh ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  function refreshPage(){
    setIsRefresh(true);
        
  }

  return (
    <LoadingData.Provider value={{ isRefresh, setIsRefresh, isLoading, setIsLoading, refreshPage }}>
      {children}
    </LoadingData.Provider>
  )
}

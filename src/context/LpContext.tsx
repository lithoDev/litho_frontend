"use client";
import React, {  
  createContext,  
  useState,  
  useContext,  
} from "react";  

const LpContext = createContext({  
  lp: "LithoToTRX",  
  setLp: (lp: string) => {},  
});  

export const useLpContext = () => {  
  return useContext(LpContext);  
};  

export const LpContextProvider = ({  
  children,  
}: Readonly<{  
  children: React.ReactNode;  
}>) => {  
  const [lp, setLp] = useState("LithoToTRX");  

  return (  
    <LpContext.Provider value={{ lp, setLp }}>  
      {children}  
    </LpContext.Provider>  
  );  
};  

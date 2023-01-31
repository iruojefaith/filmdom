// import useContext and createContext from react
import React, { useContext, createContext } from "react";
import { useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const numb = 6;
  const callAlert = () => {
    // alert("Hi, Faith talk sey mey we use anything.");
  };
  const [abuseFaith, setAbuseFaith] = useState("nonsense");

  return (
    <AppContext.Provider value={{ numb, callAlert, abuseFaith, setAbuseFaith }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

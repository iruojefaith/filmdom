// import useContext and createContext from react
import React, { useContext, createContext } from "react";
import  "./components/tab"
const AppContext = createContext();

const AppProvider = ({ children, handleChange}) => {



  return (
    <AppContext.Provider value={{ handleChange }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

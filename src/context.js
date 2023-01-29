// import useContext and createContext from react
import React, { useContext, createContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const handleChange = (e) => {
    setLoading(true);
    const val = e.target.value;
    const matchingMovies = allMovies.filter((movie) =>
      movie.original_title.toLowerCase().startsWith(val.toLowerCase())
    );
    setDisplayedMovies(matchingMovies);
    setLoading(false);
  };
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

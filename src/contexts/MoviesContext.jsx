import { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  async function fetchGetMovies() {
    const res = await fetch("http://localhost:3000/movies");
    const data = await res.json();
    setMovies(data);
  }

  useEffect(() => {
    fetchGetMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  );
};

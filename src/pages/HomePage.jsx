import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import Card from "../components/Card";

export default function HomePage() {
  const { movies } = useContext(MoviesContext);

  return (
    <>
      <h1>HomePage</h1>
      {movies ? (
        movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}

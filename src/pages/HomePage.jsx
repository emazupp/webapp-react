import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

export default function HomePage() {
  const { movies } = useContext(MoviesContext);
  console.log(movies);
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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  async function fetchShowMovie() {
    const res = await fetch(`http://localhost:3000/movies/${id}`);
    const data = await res.json();
    setMovie(data);
  }

  useEffect(() => {
    fetchShowMovie();
  }, []);

  console.log(movie);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>{movie.title}</h1>
        </div>
        <div className="col-6">
          <img className="card-img h-500" src={movie.image} alt={movie.id} />
        </div>
        <div className="col-6">
          <h4>Trama</h4>
          <span>{movie.abstract}</span>

          <h4>Regista</h4>
          <span>{movie.director}</span>

          <h4>Genere</h4>
          <span>{movie.genre}</span>

          <h4>Anno di uscita</h4>
          <span>{movie.release_year}</span>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h2>Recensioni</h2>
        </div>
        {movie.reviews ? (
          movie.reviews.map((review) => {
            return (
              <div className="col-8 mt-3">
                <div>
                  <b>{review.name}</b>
                  <span> Voto: {review.vote}</span>
                </div>
                <span>{review.text}</span>
              </div>
            );
          })
        ) : (
          <span>Nessuna recensione</span>
        )}
      </div>
    </>
  );
}

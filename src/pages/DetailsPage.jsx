import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const defaultFormValue = {
    name: "",
    vote: "",
    text: "",
  };

  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [formValue, setFormValue] = useState(defaultFormValue);

  const handleFormValue = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  async function fetchShowMovie() {
    const res = await fetch(`http://localhost:3000/movies/${id}`);
    const data = await res.json();
    setMovie(data);
  }

  async function fetchStoreReviews(e) {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/movies/${id}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValue),
    });
    const data = await res.json();
    setFormValue(defaultFormValue);
    fetchShowMovie();
  }

  useEffect(() => {
    fetchShowMovie();
  }, []);

  return (
    <>
      <div className="row mb-4">
        <div className="col-12">
          <h1>{movie.title}</h1>
        </div>
        <div className="col-6">
          <img className="card-img" src={movie.image} alt={movie.id} />
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

      <hr />

      <div className="row mt-4 mb-5">
        <div className="col-12">
          <h2>Recensioni</h2>
        </div>
        <div className="col-12">
          <h4>Inserisci recensione</h4>
          <form onSubmit={fetchStoreReviews}>
            <div className="row align-items-end">
              <div className="col-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={formValue.name}
                  onChange={handleFormValue}
                />
              </div>
              <div className="col-3">
                <label htmlFor="vote" className="form-label">
                  Voto
                </label>
                <input
                  type="text"
                  name="vote"
                  className="form-control"
                  id="vote"
                  value={formValue.vote}
                  onChange={handleFormValue}
                />
              </div>
              <div className="col-4">
                <label htmlFor="text" className="form-label">
                  Testo
                </label>
                <input
                  type="text"
                  name="text"
                  className="form-control"
                  id="text"
                  value={formValue.text}
                  onChange={handleFormValue}
                />
              </div>
              <div className="col-2">
                <button className="btn btn-primary">Invia</button>
              </div>
            </div>
          </form>
        </div>
        {movie.reviews ? (
          movie.reviews.map((review) => {
            return (
              <>
                <div className="col-8 mt-3">
                  <div>
                    <b>{review.name}</b>
                    <span> Voto: {review.vote}</span>
                  </div>
                  <span>{review.text}</span>
                </div>
              </>
            );
          })
        ) : (
          <span>Nessuna recensione</span>
        )}
      </div>
    </>
  );
}

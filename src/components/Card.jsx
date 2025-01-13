import { useNavigate } from "react-router-dom";

export default function Card({ movie }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-4">
        <div
          onClick={() => navigate(`/movies/${movie.id}`)}
          className="card h-100"
        >
          <span>{movie.title}</span>
          <img className="h-100" src={movie.image}></img>
        </div>
      </div>
    </>
  );
}

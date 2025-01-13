import { useNavigate } from "react-router-dom";

export default function Card({ movie }) {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate(`/movies/${movie.id}`)} className="card">
        <span>{movie.title}</span>
        <img src={movie.image}></img>
      </div>
    </>
  );
}

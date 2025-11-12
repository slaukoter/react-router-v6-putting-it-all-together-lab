import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function MovieCard() {
  const { id, movieId } = useParams();
  const { directors } = useOutletContext();

  const director = directors.find((d) => String(d.id) === String(id));
  if (!director) return <p>Director not found</p>;

  const movie = director.movies.find((m) => String(m.id) === String(movieId));
  if (!movie) return <p>Movie not found</p>;

  return (
    <article>
      <p>{movie.title}</p>

      <h2 style={{ marginTop: 0 }}>{movie.title}</h2>

      {typeof movie.time !== "undefined" && (
        <p>Duration: {movie.time} minutes</p>
      )}
      {Array.isArray(movie.genres) && movie.genres.length > 0 && (
        <p>{movie.genres.join(", ")}</p>
      )}
      <p>
        <em>Director:</em> {director.name}
      </p>
    </article>
  );
}

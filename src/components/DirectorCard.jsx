import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

export default function DirectorCard() {
  const { id } = useParams();
  const { directors } = useOutletContext();
  const director = directors.find((d) => String(d.id) === String(id));

  if (!director) return <p>Director not found</p>;

  return (
    <div>
      <h3 style={{ marginTop: 0 }}>{director.name}</h3>
      {director.bio && <p style={{ color: "#666" }}>{director.bio}</p>}

      <h4>Movies</h4>
      {director.movies.length === 0 ? (
        <p>No movies yet.</p>
      ) : (
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {director.movies.map((m) => (
            <li key={m.id} style={{ padding: 6 }}>
              <Link to={`movies/${m.id}`}>{m.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

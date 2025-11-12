import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function DirectorList() {
  const { directors } = useOutletContext();

  if (!directors.length) return <p>No directors yet. Add one!</p>;

  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {directors.map((d) => (
        <li key={d.id} style={{ padding: 8, borderBottom: "1px solid #eee" }}>
          <Link to={`${d.id}`} style={{ fontWeight: 600 }}>
            {d.name}
          </Link>
          {d.bio ? (
            <p style={{ margin: "4px 0 0", color: "#666" }}>{d.bio}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

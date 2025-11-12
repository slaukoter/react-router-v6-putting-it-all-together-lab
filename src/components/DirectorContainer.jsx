import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function DirectorContainer() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch("/directors");
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        if (isMounted) setDirectors(data);
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const addDirector = (payload) => {
    const nextIdNum =
      Math.max(0, ...directors.map((d) => Number(d.id) || 0)) + 1;
    const newDirector = { id: String(nextIdNum), ...payload, movies: [] };
    setDirectors((prev) => [...prev, newDirector]);
    return newDirector;
  };

  const addMovie = (directorId, payload) => {
    let created = null;
    setDirectors((prev) =>
      prev.map((d) => {
        if (String(d.id) === String(directorId)) {
          created = { id: `m${Date.now()}`, ...payload };
          return { ...d, movies: [...d.movies, created] };
        }
        return d;
      })
    );
    return created;
  };

  const ctx = useMemo(
    () => ({ directors, addDirector, addMovie, loading }),
    [directors, loading]
  );

  return (
    <section style={{ padding: 16 }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <h2 style={{ margin: 0 }}>Directors</h2>
        <Link
          to="new"
          style={{
            padding: "6px 10px",
            background: "#222",
            color: "#fff",
            borderRadius: 8,
          }}
        >
          + New Director
        </Link>
      </header>

      {loading ? <p>Loading…</p> : <Outlet context={ctx} />}
    </section>
  );
}

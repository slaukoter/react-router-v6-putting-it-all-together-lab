import React, { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

export default function MovieForm() {
  const { id } = useParams(); // director id
  const { addMovie } = useOutletContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: "", time: "", genres: "" });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const title = form.title.trim();
    const time = Number(form.time);
    const genres = form.genres
      .split(",")
      .map((g) => g.trim())
      .filter(Boolean);

    if (!title || !time) return;

    const newMovie = addMovie(id, { title, time, genres });
    navigate(`/directors/${id}/movies/${newMovie.id}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "grid", gap: 8, maxWidth: 420 }}
    >
      <h3>Add New Movie</h3>
      <label>
        Title
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="e.g. Inception"
        />
      </label>
      <label>
        Duration (minutes)
        <input
          name="time"
          value={form.time}
          onChange={onChange}
          placeholder="e.g. 148"
        />
      </label>
      <label>
        Genres (comma-separated)
        <input
          name="genres"
          value={form.genres}
          onChange={onChange}
          placeholder="e.g. Sci-Fi, Thriller"
        />
      </label>
      <div>
        <button type="submit">Add New Movie</button>
      </div>
    </form>
  );
}

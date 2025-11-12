import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function DirectorForm() {
  const navigate = useNavigate();
  const { addDirector } = useOutletContext();
  const [form, setForm] = useState({ name: "", bio: "" });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    const newDir = addDirector({
      name: form.name.trim(),
      bio: form.bio.trim(),
    });
    navigate(`/directors/${newDir.id}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "grid", gap: 8, maxWidth: 420 }}
    >
      <h3>Add New Director</h3>
      <label>
        Name
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="e.g. Christopher Nolan"
        />
      </label>
      <label>
        Bio
        <textarea
          name="bio"
          value={form.bio}
          onChange={onChange}
          placeholder="Short bio (optional)"
        />
      </label>
      <div>
        <button type="submit">Create Director</button>
      </div>
    </form>
  );
}

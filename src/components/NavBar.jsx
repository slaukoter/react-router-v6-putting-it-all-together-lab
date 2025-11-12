import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  padding: "8px 12px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 600,
  background: isActive ? "#e8e8ff" : "#f5f5f5",
});

export default function NavBar() {
  return (
    <nav
      style={{ padding: 12, borderBottom: "1px solid #ddd", marginBottom: 16 }}
    >
      <NavLink to="/" style={linkStyle} end>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/directors" style={linkStyle}>
        Directors
      </NavLink>
    </nav>
  );
}

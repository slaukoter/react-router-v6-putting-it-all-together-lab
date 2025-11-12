import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import DirectorContainer from "./components/DirectorContainer";
import DirectorList from "./components/DirectorList";
import DirectorForm from "./components/DirectorForm";
import DirectorCard from "./components/DirectorCard";
import MovieForm from "./components/MovieForm";
import MovieCard from "./components/MovieCard";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/directors" element={<DirectorContainer />}>
          <Route index element={<DirectorList />} />
          <Route path="new" element={<DirectorForm />} />
          <Route path=":id" element={<DirectorCard />} />
          <Route path=":id/movies/new" element={<MovieForm />} />
          <Route path=":id/movies/:movieId" element={<MovieCard />} />
        </Route>

        <Route path="*" element={<h2 style={{ padding: 16 }}>Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

import React, { useState, useEffect } from "react";
import "./App.css";
import "./MovieCard.css";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=5cab2eae";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");

  const searchMovies = async (title) => {
    if (title.trim()) {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search || []);
    }
  };

  useEffect(() => {
    if (movie.trim()) {
      searchMovies(movie);
    }
  }, [movie]);

  const handleHomeClick = () => {
    setMovies([]);
    setMovie("");
  };

  return (
    <div className="app">
      <header>
        <h2 className="navbar">
          <a href="/" onClick={handleHomeClick}>
            Home
          </a>
          <a href="/">Movies</a>
          <a href="/">Anime</a>
          <a href="/">Genres</a>
          <a href="/">TV Shows</a>
        </h2>
      </header>

      <main>
        <h1>AdultMovie.com</h1>
        <div className="search">
          <input
            placeholder="search for movies"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
          <button onClick={() => searchMovies(movie)}>Search</button>
        </div>

        {movies.length > 0 ? (
          <div className="container">
            {movies.map((m) => (
              <MovieCard key={m.imdbID} props={m} />
            ))}
          </div>
        ) : movie.trim() !== "" ? (
          <div className="empty">
            <h4>No Movie Found!</h4>
          </div>
        ) : null}
      </main>

      <footer className="footer">
        <p>&copy; 2024 AdultMovie.com - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;

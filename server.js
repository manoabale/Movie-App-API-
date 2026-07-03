const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Fake movie data for now (you can replace with real API later)
const movies = [
  { id: 1, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { id: 2, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
  { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { id: 4, title: "Parasite", year: 2019, rating: 8.6, genre: "Thriller" }
];

// Status route
app.get("/", (req, res) => {
  res.json({ message: "Movie API is running" });
});

// Get all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// Search movies by title (query: ?q=dark)
app.get("/search", (req, res) => {
  const q = (req.query.q || "").toLowerCase();
  const results = movies.filter(m =>
    m.title.toLowerCase().includes(q)
  );
  res.json(results);
});

// Filter by genre (query: ?genre=Sci-Fi)
app.get("/movies/genre", (req, res) => {
  const genre = (req.query.genre || "").toLowerCase();
  const results = movies.filter(
    m => m.genre.toLowerCase() === genre
  );
  res.json(results);
});

app.listen(3000, () => console.log("Movie API running on port 3000"));

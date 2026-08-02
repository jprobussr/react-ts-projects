import './App.css';
import MovieForm from './components/MovieForm';
import type { Movie } from './types/Movie';
import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleAddMovie = () => {

  }

  return (
    <main className="app">
      <section>
        <h1>Movie Watchlist</h1>

        <MovieForm />

        <button>Add Movie</button>
      </section>
    </main>
  );
};

export default App;

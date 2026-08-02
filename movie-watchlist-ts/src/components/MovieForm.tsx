import './MovieForm.css';
import { useState, type ChangeEvent } from 'react';

const MovieForm = () => {
  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<string>('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value);
  };

  return (
    <form>
      <h2>Add a movie</h2>
      <label htmlFor="title">Title</label>

      <input
        type="text"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />

      <label htmlFor="genre">Genre</label>

      <select id="genre" value={genre} onChange={handleGenreChange}>
        <option value="">Select a genre</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
    </form>
  );
};

export default MovieForm;

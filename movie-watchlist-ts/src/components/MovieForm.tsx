import './MovieForm.css';
import { useState, type ChangeEvent } from 'react';

const MovieForm = () => {
  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [rating, setRating] = useState<number>(1);
  const [isWatched, setIsWatched] = useState<boolean>(false);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value);
    console.log(event.target.value);
  };

  const handleRatingChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(event.target.value));
  };

  const handleWatchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsWatched(event.target.checked);
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

      <label htmlFor="rating">Rating</label>

      <select id="rating" value={rating} onChange={handleRatingChange}>
        <option value={1}>1 Star</option>
        <option value={2}>2 Star</option>
        <option value={3}>3 Star</option>
        <option value={4}>4 Star</option>
        <option value={5}>5 Star</option>
      </select>

      <label htmlFor="isWatched">
        <input
          type="checkbox"
          id="isWatched"
          checked={isWatched}
          onChange={handleWatchChange}
        />
        Already Watched
      </label>
    </form>
  );
};

export default MovieForm;

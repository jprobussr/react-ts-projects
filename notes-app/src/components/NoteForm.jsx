import { useState } from 'react';
import './NoteForm.css';

const NoteForm = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedNote = noteText.trim();

    if (!trimmedNote) {
      return;
    }

    console.log(trimmedNote);
    onAddNote(trimmedNote);

    setNoteText('');
  };

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <label htmlFor="note">New Note</label>

      <textarea
        name="note"
        id="note"
        placeholder="Write your note"
        value={noteText}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;

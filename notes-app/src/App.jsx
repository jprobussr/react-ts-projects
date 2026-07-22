import { useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm.jsx';
import NoteList from './components/NoteList.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleDeleteNote = (noteId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== noteId;
      });
    });
  };

  const handleAddNote = (newNoteText) => {
    const newNote = {
      id: crypto.randomUUID(),
      text: newNoteText,
    };

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  return (
    <main className="app">
      <section className="notes-app">
        <h1>Notes App</h1>
        <p>Capture your ideas and keep them organized.</p>

        <NoteForm onAddNote={handleAddNote} />

        <p className="notes-count">
          {notes.length} {notes.length === 1 ? 'note' : 'notes'}
        </p>

        <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
      </section>
    </main>
  );
};

export default App;

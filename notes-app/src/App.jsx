import { useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
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
      </section>
    </main>
  );
};

export default App;

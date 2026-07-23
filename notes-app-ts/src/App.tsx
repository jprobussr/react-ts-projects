import React, { useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import type { Note } from './types/Note';

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContent(event.target.value);
  };

  const handleAddNote = () => {
    if (!title.trim() || !content.trim()) {
      return;
    }

    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
    };

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    setTitle('');
    setContent('');
  };

  return (
    <main className="app">
      <section>
        <h1>Notes App TS</h1>

        <NoteForm
          title={title}
          content={content}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
          onAddNote={handleAddNote}
        />

        <NoteList notes={notes} />
      </section>
    </main>
  );
};

export default App;

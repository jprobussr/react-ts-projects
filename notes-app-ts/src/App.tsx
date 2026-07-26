import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import type { Note } from './types/Note';

const App = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem('notes');

    if (!savedNotes) {
      return [];
    }

    return JSON.parse(savedNotes) as Note[];
  });
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

  const handleDeleteNote = (noteId: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== noteId;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main className="app">
      <section>
        <h1 className='app__title'>Notes App TS</h1>

        <NoteForm
          title={title}
          content={content}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
          onAddNote={handleAddNote}
        />

        <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
      </section>
    </main>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

type Note = {
  id: string;
  title: string;
  content: string;
};

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

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={handleTitleChange}
        />

        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={handleContentChange}
        ></textarea>

        <button type="button" onClick={handleAddNote}>
          Add Note
        </button>

        <section className="notes-list">
          {notes.map((note) => {
            return (
              <article className="note-card" key={note.id}>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default App;

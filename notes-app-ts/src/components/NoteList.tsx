import NoteCard from './NoteCard';
import './NoteList.css';
import type { Note } from '../types/Note';

type NoteListProps = {
  notes: Note[];
  onDeleteNote: (noteId: string) => void;
};

const NoteList = ({ notes, onDeleteNote }: NoteListProps) => {
  const hasNotes = notes.length > 0;

  return (
    <section className="notes-list">
      {hasNotes ? (
        notes.map((note) => {
          return (
            <NoteCard key={note.id} note={note} onDeleteNote={onDeleteNote} />
          );
        })
      ) : (
        <p className="notes-list__empty">
          No notes yet. Create your first note.
        </p>
      )}
    </section>
  );
};

export default NoteList;

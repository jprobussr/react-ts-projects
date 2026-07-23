import NoteCard from './NoteCard';
import './NoteList.css';
import type { Note } from '../types/Note';

type NoteListProps = {
  notes: Note[];
};

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <section className="notes-list">
      {notes.map((note) => {
        return <NoteCard key={note.id} note={note} />;
      })}
    </section>
  );
};

export default NoteList;

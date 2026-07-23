import './NoteCard.css';
import type { Note } from '../types/Note';

type NoteCardProps = {
  note: Note;
};

const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <article className="note-card" key={note.id}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </article>
  );
};

export default NoteCard;

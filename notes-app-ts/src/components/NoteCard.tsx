import './NoteCard.css';
import type { Note } from '../types/Note';

type NoteCardProps = {
  note: Note;
  onDeleteNote: (noteId: string) => void;
};

const NoteCard = ({ note, onDeleteNote }: NoteCardProps) => {
  const handleDeleteClick = () => {
    onDeleteNote(note.id);
  };

  return (
    <article className="note-card" key={note.id}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>

      <button type="button" onClick={handleDeleteClick}>
        x
      </button>
    </article>
  );
};

export default NoteCard;

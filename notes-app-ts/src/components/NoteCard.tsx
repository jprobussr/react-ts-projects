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
      <div className="note-card__content">
        <h2 className="note-card__title">{note.title}</h2>
        <p className="note-card__text">{note.content}</p>
      </div>

      <button
        className="note-card__delete-button"
        type="button"
        onClick={handleDeleteClick}
      >
        x
      </button>
    </article>
  );
};

export default NoteCard;

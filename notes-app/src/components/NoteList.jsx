import './NoteList.css';

const NoteList = ({ notes, onDeleteNote }) => {

  if (notes.length === 0) {
    return <p className="notes-list__empty">No notes yet.</p>
  }

  return (
    <ul className="notes-list">
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <span>{note.text}</span>

            <button type="button" onClick={() => onDeleteNote(note.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteList;

import './NoteForm.css';

type NoteFormProps = {
  title: string;
  content: string;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAddNote: () => void;
};

const NoteForm = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  onAddNote,
}: NoteFormProps) => {
  return (
    <section className="note-form">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={onTitleChange}
      />

      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={onContentChange}
      ></textarea>

      <button type="button" onClick={onAddNote}>
        Add Note
      </button>
    </section>
  );
};

export default NoteForm;

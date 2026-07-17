type TodoFormProps = {
  newTodoText: string;
  onTodoTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: (event: React.SubmitEvent<HTMLFormElement>) => void;
};

const TodoForm = ({
  newTodoText,
  onTodoTextChange,
  onAddTodo,
}: TodoFormProps) => {
  return (
    <form className="todo__form" onSubmit={onAddTodo}>
      <input
        type="text"
        className="todo__input"
        placeholder="What do you need"
        value={newTodoText}
        onChange={onTodoTextChange}
      />

      <button className="todo__button" type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;

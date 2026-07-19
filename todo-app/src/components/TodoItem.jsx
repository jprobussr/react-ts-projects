import './TodoItem.css';

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }) => {
  const handleToggle = () => {
    onToggleTodo(todo.id);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  }

  return (
    <li
      className={`todo-item ${todo.isCompleted ? 'todo-item--completed' : ''}`}
    >
      <label className="todo-item__content">
        <input
          type="checkbox"
          className="todo-item__checkbox"
          checked={todo.isCompleted}
          onChange={handleToggle}
        />

        <span className="todo-item__text">{todo.text}</span>
      </label>

      <button className="todo-item__delete" type='button' onClick={handleDelete} aria-label={`Delete ${todo.text}`}>x</button>
    </li>
  );
};

export default TodoItem;

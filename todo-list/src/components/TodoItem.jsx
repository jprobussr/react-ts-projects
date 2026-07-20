import './TodoItem.css';

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <li
      className={`todo-item ${todo.isCompleted ? 'todo-item--completed' : ''}`}
    >
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        checked={todo.isCompleted}
        onChange={() => onToggleTodo(todo.id)}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>

      <button type="button" onClick={() => onDeleteTodo(todo.id)}>
        x
      </button>
    </li>
  );
};

export default TodoItem;

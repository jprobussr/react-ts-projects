import './TodoItem.css';

const TodoItem = ({ todo, onToggleTodo }) => {
    const handleToggle = () => {
        onToggleTodo(todo.id);
    }

  return (
    <li className={`todo-item ${todo.isCompleted ? 'todo-item--completed' : ''}`}>
      <label className="todo-item__content">
        <input
          type="checkbox"
          className="todo-item__checkbox"
          checked={todo.isCompleted}
          onChange={handleToggle}
        />

        <span className="todo-item__text">{todo.text}</span>
      </label>
    </li>
  );
};

export default TodoItem;

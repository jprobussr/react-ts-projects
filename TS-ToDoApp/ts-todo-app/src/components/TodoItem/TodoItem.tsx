import type { Todo } from '../../types/Todo';
import './TodoItem.css';

type TodoItemProps = {
  todo: Todo;
  onToggleTodo: (id: number) => void;
};

const TodoItem = ({ todo, onToggleTodo }: TodoItemProps) => {
  return (
    <li
      className={`todo__item ${todo.isCompleted ? 'todo__item--completed' : ''}`}
    >
      <label className="todo__checkbox">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onToggleTodo(todo.id)}
        />

        <span className="todo__item-text">{todo.text}</span>
      </label>
    </li>
  );
};

export default TodoItem;

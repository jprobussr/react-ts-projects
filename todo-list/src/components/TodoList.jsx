import TodoItem from './TodoItem.jsx';
import './TodoList.css';

const TodoList = ({ todos, onToggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
        );
      })}
    </ul>
  );
};

export default TodoList;

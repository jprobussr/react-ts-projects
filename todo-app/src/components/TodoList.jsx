import './TodoList.css';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, onToggleTodo }) => {
  return (
    <section className="todo-list">
      <h2 className="todo-list__title">Your Tasks</h2>

      <ul className="todo-list__items">
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;

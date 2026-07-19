import './TodoList.css';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <section className="todo-list">
        <p className="todo-list__empty">
          No tasks yet. Add your first task above.
        </p>
      </section>
    );
  }
  return (
    <section className="todo-list">
      <h2 className="todo-list__title">Your Tasks</h2>

      <ul className="todo-list__items">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;

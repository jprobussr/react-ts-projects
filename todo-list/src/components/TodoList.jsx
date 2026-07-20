import TodoItem from './TodoItem.jsx';
import './TodoList.css';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <p className="todo-list__empty">No todos yet. Add your first task.</p>
    );
  }
  return (
    <ul className="todo-list">
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
  );
};

export default TodoList;

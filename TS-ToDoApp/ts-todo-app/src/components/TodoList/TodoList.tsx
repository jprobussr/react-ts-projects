import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import type { Todo } from '../../types/Todo';

type TodoListProps = {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
};

const TodoList = ({ todos, onToggleTodo }: TodoListProps) => {
  return (
    <ul className="todo__list">
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
        );
      })}
    </ul>
  );
};

export default TodoList;

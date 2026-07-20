import React from 'react';

const TodoItem = ({ todo, onToggleTodo }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        checked={todo.isCompleted}
        onChange={() => onToggleTodo(todo.id)}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
    </li>
  );
};

export default TodoItem;

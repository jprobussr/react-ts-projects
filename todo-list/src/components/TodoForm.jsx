import { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleTodoTextChange = (event) => {
    console.log(event.target.value);
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTodo = todoText.trim();

    if (!trimmedTodo) {
      return;
    }

    onAddTodo(trimmedTodo);

    setTodoText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input">Add a todo</label>

      <input
        type="text"
        id="todo-input"
        placeholder="What needs to be done?"
        value={todoText}
        onChange={handleTodoTextChange}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

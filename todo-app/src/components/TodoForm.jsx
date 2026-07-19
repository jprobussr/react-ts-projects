import { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({onAddTodo}) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTodo = todoText.trim();

    if (!trimmedTodo) {
      return;
    }

    onAddTodo(trimmedTodo);
    
    setTodoText('');
  };

  const handleTodoChange = (event) => {
    setTodoText(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo" className="todo-form__label">
        Add a new task
      </label>

      <div className="todo-form__controls">
        <input
          className="todo-form__input"
          type="text"
          id="todo"
          name="todo"
          placeholder="What needs to be done?"
          value={todoText}
          onChange={handleTodoChange}
        />

        <button className="todo-form__button" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

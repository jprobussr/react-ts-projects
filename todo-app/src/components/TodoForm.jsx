import './TodoForm.css';

const TodoForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted!');
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
        />

        <button className="todo-form__button" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

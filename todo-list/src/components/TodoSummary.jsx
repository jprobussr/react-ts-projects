import './TodoSummary.css';

const TodoSummary = ({ todos }) => {
  const completedCount = todos.filter((todo) => {
    return todo.isCompleted;
  }).length;

  const activeCount = todos.length - completedCount;

  return (
    <section className="todo-summary" aria-label="Todo Summary">
      <p>
        <strong>{todos.length}</strong> Total
      </p>

      <p>
        <strong>{activeCount}</strong> Active
      </p>

      <p>
        <strong>{completedCount}</strong> Completed
      </p>
    </section>
  );
};

export default TodoSummary;

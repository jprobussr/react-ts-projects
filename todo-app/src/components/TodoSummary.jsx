import './TodoSummary.css';

const TodoSummary = ({ todos }) => {
  const getTodoCounts = () => {
    const completedCount = todos.filter((todo) => {
      return todo.isCompleted;
    }).length;

    const activeCount = todos.length - completedCount;

    return {
      totalCount: todos.length,
      activeCount,
      completedCount,
    };
  };

  const { totalCount, activeCount, completedCount } = getTodoCounts();

  return (
    <section className="todo-summary" aria-label="Todo summary">
      <p className="todo-summary__item">
        <span className="todo-summary__number">{totalCount}</span>
        Total
      </p>

      <p className="todo-summary__item">
        <span className="todo-summary__number">{activeCount}</span>
        Active
      </p>

      <p className="todo-summary__item">
        <span className="todo-summary__number">{completedCount}</span>
        Completed
      </p>
    </section>
  );
};

export default TodoSummary;

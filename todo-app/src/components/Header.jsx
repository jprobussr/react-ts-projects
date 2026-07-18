import './Header.css';

const Header = () => {
  return (
    <header className="todo__header">
      <p className="todo__eyebrow">Stay Organized</p>
      <h1 className="todo__title">Todo App</h1>
      <p className="todo__description">
        Add tasks, track your progress, and stay focused.
      </p>
    </header>
  );
};

export default Header;

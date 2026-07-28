import './App.css';
import ShoppingForm from './components/ShoppingForm';

const App = () => {
  return (
    <main className="app">
      <section className="shopping-list">
        <header className="shopping-list__header">
          <p className="shopping-list__eyebrow">TypeScript Practice</p>
          <h1 className="shopping-list__title">Shopping List</h1>
          <p className="shopping-list__description">
            Add the items you need and mark them as purchased.
          </p>
        </header>

        <ShoppingForm />
      </section>
    </main>
  );
};

export default App;

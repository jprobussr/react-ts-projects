import { useState } from 'react';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingItem from './components/ShoppingItem';

type ShoppingItem = {
  id: string;
  name: string;
  isPurchased: boolean;
};

const App = () => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);

  const handleAddItem = (itemName: string) => {
    const newItem: ShoppingItem = {
      id: crypto.randomUUID(),
      name: itemName,
      isPurchased: false,
    };

    setShoppingItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

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

        <ShoppingForm onAddItem={handleAddItem} />

        <ul className="shopping-list__items">
          {shoppingItems.map((item) => {
            return <ShoppingItem key={item.id} name={item.name} />
          })}
        </ul>
      </section>
    </main>
  );
};

export default App;

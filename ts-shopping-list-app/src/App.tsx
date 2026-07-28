import { useState } from 'react';
import type { ShoppingItem } from './types/shopping';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

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
      <section className="shopping-app">
        <h1 className="shopping-app__title">Shopping List</h1>

        <p className="shopping-app__description">
          Keep track of everything you need to buy.
        </p>

        <ShoppingForm onAddItem={handleAddItem} />
        <ShoppingList items={shoppingItems} />
      </section>
    </main>
  );
};

export default App;

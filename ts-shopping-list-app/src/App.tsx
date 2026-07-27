import { useState } from 'react';
import type { ShoppingItem } from './types/shopping';
import './App.css';
import ShoppingForm from './components/ShoppingForm';

const App = () => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([])

  return (
    <main className="app">
      <section className="shopping-app">
        <h1 className="shopping-app__title">Shopping List</h1>

        <p className="shopping-app__description">
          Keep track of everything you need to buy.
        </p>

        <ShoppingForm />
        
      </section>
    </main>
  );
};

export default App;

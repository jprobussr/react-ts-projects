import { useState } from 'react';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingItem from './components/ShoppingItem';
import ShoppingSummary from './components/ShoppingSummary';

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

  const handleToggleItem = (itemId: string) => {
    setShoppingItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            isPurchased: !item.isPurchased,
          };
        }
        return item;
      });
    });
  };

  const handleDeleteItem = (itemId: string) => {
    setShoppingItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== itemId;
      });
    });
  };

  const purchasedCount = shoppingItems.filter((item) => {
    return item.isPurchased;
  }).length;

  const remainingCount = shoppingItems.length - purchasedCount;

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

        <ShoppingSummary
          totalCount={shoppingItems.length}
          purchasedCount={purchasedCount}
          remainingCount={remainingCount}
        />

        {shoppingItems.length === 0 ? (
          <p className="shopping-list__empty">Your shopping list is empty</p>
        ) : (
          <ul className="shopping-list__items">
            {shoppingItems.map((item) => {
              return (
                <ShoppingItem
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  isPurchased={item.isPurchased}
                  onToggleItem={handleToggleItem}
                  onDeleteItem={handleDeleteItem}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
};

export default App;

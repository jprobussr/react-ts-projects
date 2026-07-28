import ShoppingItem from './ShoppingItem';
import type { ShoppingItem as ShoppingItemType } from '../types/shopping';
import './ShoppingList.css';

type ShoppingListProps = {
  items: ShoppingItemType[];
};

const ShoppingList = ({ items }: ShoppingListProps) => {
  return (
    <section className="shopping-list">
      <h2>Shopping Items</h2>

      <ul>
        {items.map((item) => {
          return <ShoppingItem key={item.id} item={item} />
        })}
      </ul>
    </section>
  );
};

export default ShoppingList;

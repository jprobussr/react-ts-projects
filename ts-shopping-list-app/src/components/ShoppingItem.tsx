import type { ShoppingItem as ShoppingItemType } from '../types/shopping';
import './ShoppingItem.css';

type ShoppingItemProps = {
  item: ShoppingItemType;
};

const ShoppingItem = ({item}: ShoppingItemProps) => {
  return (
    <li>
        {item.name}
    </li>
  )
};

export default ShoppingItem;

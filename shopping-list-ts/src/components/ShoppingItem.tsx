import './ShoppingItem.css';

type ShoppingItemProps = {
  name: string;
};

const ShoppingItem = ({ name }: ShoppingItemProps) => {
  return <li className="shopping-item">{name}</li>;
};

export default ShoppingItem;

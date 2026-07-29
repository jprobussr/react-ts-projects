import './ShoppingItem.css';

type ShoppingItemProps = {
  id: string;
  name: string;
  isPurchased: boolean;
  onToggleItem: (itemId: string) => void;
};

const ShoppingItem = ({
  id,
  name,
  isPurchased,
  onToggleItem,
}: ShoppingItemProps) => {
  const handleToggleChange = () => {
    onToggleItem(id);
  };

  return (
    <li className="shopping-item">
      <input
        type="checkbox"
        checked={isPurchased}
        onChange={handleToggleChange}
      />

      <span
        className={
          isPurchased
            ? 'shopping-item__name shopping-item__name--purchased'
            : 'shopping-item__name'
        }
      >
        {name}
      </span>
    </li>
  );
};

export default ShoppingItem;

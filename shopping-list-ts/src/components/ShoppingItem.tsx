import './ShoppingItem.css';

type ShoppingItemProps = {
  id: string;
  name: string;
  isPurchased: boolean;
  onToggleItem: (itemId: string) => void;
  onDeleteItem: (itemId: string) => void;
};

const ShoppingItem = ({
  id,
  name,
  isPurchased,
  onToggleItem,
  onDeleteItem,
}: ShoppingItemProps) => {

  const handleToggleChange = () => {
    onToggleItem(id);
  };

  const handleDeleteClick = () => {
    onDeleteItem(id);
  };

  return (
    <li className="shopping-item">
      <label className="shopping-item__content">
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
      </label>

      <button className="shopping-item__delete" type='button' onClick={handleDeleteClick}>Delete</button>
    </li>
  );
};

export default ShoppingItem;

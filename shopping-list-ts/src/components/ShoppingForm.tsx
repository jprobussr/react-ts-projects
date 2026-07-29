import { useState } from 'react';
import './ShoppingForm.css';

type ShoppingFormProps = {
  onAddItem: (itemName: string) => void;
};

const ShoppingForm = ({ onAddItem }: ShoppingFormProps) => {
  const [itemName, setItemName] = useState('');

  const handleItemNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedItemName = itemName.trim();

    if (!trimmedItemName) {
      return;
    }

    onAddItem(trimmedItemName);

    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit} className="shopping-form">
      <label htmlFor="shopping-item">Shopping item</label>

      <input
        id="shopping-item"
        type="text"
        className="shopping-form__input"
        placeholder="Example: Apples"
        value={itemName}
        onChange={handleItemNameChange}
      />

      <button className="shopping-form__button" type="submit">
        Add item
      </button>
    </form>
  );
};

export default ShoppingForm;

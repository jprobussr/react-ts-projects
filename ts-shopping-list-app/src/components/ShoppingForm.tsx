import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import './ShoppingForm.css';

type ShoppingFormProps = {
  onAddItem: (itemName: string) => void;
};

const ShoppingForm = ({ onAddItem }: ShoppingFormProps) => {
  const [itemName, setItemName] = useState('');

  const handleItemNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const trimmedItemName = itemName.trim();

    if (!trimmedItemName) {
      return;
    }

    console.log(trimmedItemName);

    onAddItem(trimmedItemName);

    setItemName('')
  };

  return (
    <form onSubmit={handleSubmit} className="shopping-form">
      <label htmlFor="item-name" className="shopping-form__label">
        Add an item
      </label>

      <div className="shopping-form__controls">
        <input
          type="text"
          id="item-name"
          className="shopping-form__input"
          value={itemName}
          placeholder="Example: Milk"
          onChange={handleItemNameChange}
        />

        <button className="shopping-form__button" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default ShoppingForm;

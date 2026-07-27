import { useState, type ChangeEvent } from 'react';
import './ShoppingForm.css';


const ShoppingForm = () => {
  const [itemName, setItemName] = useState('');

  const handleItemNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  }

  return (
    <form className="shopping-form">
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

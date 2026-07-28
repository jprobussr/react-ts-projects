import { useState } from 'react';
import './ShoppingForm.css';

const ShoppingForm = () => {
    const [itemName, setItemName] = useState('');



  return (
    <form className="shopping-form">
      <label htmlFor="shopping-item">Shopping item</label>

      <input
        id="shopping-item"
        type="text"
        className="shopping-form__input"
        placeholder="Example: Apples"
        value={itemName}
      />

      <button className="shopping-form__button" type="submit">
        Add item
      </button>
    </form>
  );
};

export default ShoppingForm;

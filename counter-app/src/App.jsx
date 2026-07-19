import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="counter-app">
      <section className="counter-card">
        <h1>Counter App</h1>
        <p className="counter-value">{count}</p>

        <div className="button-group">
          <button
            type="button"
            onClick={handleIncrement}
            aria-label="Increase Count"
          >
            +
          </button>
          <button
            type="button"
            onClick={handleDecrement}
            aria-label="Decrease count"
          >
            -
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;

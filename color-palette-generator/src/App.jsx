import { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setColor] = useState('#4f46e5');

  const generateRandomColor = () => {
    const hexDigits = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];
    let randomColor = '#';

    for (let i = 0; i < 6; i += 1) {
      const randomIndex = Math.floor(Math.random() * hexDigits.length);

      randomColor += hexDigits[randomIndex];
    }

    setColor(randomColor)
  };

  return (
    <main className="app">
      <section className="color-generator">
        <p className="color-generator__eyebrow">React Practice Project</p>
        <h1 className="color-generator__title">Color Palette Generator</h1>
        <p className="color-generator__description">
          Generate a random color and view its HEX value.
        </p>

        <div
          className="color-generator__preview"
          style={{ backgroundColor: color }}
        >
          <span className="color-generator__value">{color}</span>
        </div>

        <button
          className="color-generator__button"
          onClick={generateRandomColor}
        >
          Generate New Color
        </button>
      </section>
    </main>
  );
};

export default App;

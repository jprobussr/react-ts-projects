import { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setColor] = useState('#4f46e5');

  return (
    <main className="app">
      <section className="color-generator">
        <p className="color-generator__eyebrow">React Practice Project</p>
        <h1 className="color-generator__title">Color Palette Generator</h1>
        <p className="color-generator__description">
          Generate a random color and view its HEX value.
        </p>

        <div className="color-generator__preview" style={{backgroundColor: color}}>
          <span className="color-generator__value">{color}</span>
        </div>
      </section>
    </main>
  );
};

export default App;

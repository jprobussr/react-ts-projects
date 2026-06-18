import FlashCard from "./components/FlashCard/FlashCard";
import { flashCards } from "./data/flashCards";
import "./App.css";




const App = () => {
  return (
    <main className="app">
      <header className="app-header">
        <h1>TypeScript Flash Cards</h1>
        <p>Study TypeScript one concept at a time.</p>
      </header>

      <section className="card-grid">
        {flashCards.map((card) => {
          return (
            <FlashCard
              key={card.id}
              question={card.question}
              answer={card.answer}
              topic={card.topic}
              difficulty={card.difficulty}
            />
          );
        })}
      </section>
    </main>
  );
};

export default App;

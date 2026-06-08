import "./App.css";
import Flashcard from "./components/Flashcard";
import { flashCards } from "./data/FlashCard";

const App = () => {
  return (
    <main className="app">
      <h1>TypeScript Flashcards</h1>

      <section className="flash-card-list">
        {flashCards.map((flashcard) => {
          return (
            <Flashcard
              key={flashcard.id}
              question={flashcard.question}
              answer={flashcard.answer}
            />
          );
        })}
      </section>
    </main>
  );
};

export default App;

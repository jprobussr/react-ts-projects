import "./App.css";
import Flashcard from "./components/Flashcard";
import { flashcards } from "./data/data";



const App = () => {
  return (
    <main className="app">
      <h1>Developer Flashcards</h1>

      {flashcards.map((card) => {
        return (
          <Flashcard
            key={card.id}
            question={card.question}
            answer={card.answer}
          />
        )
      })}
    </main>
  );
};

export default App;

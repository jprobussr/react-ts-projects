import FlashCard from "./components/FlashCard/FlashCard";
import { flashCards } from "./data/flashCards";

console.log(flashCards);

const App = () => {
  return (
    <main>
      <h1>TypeScript FlashCards</h1>

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
    </main>
  );
};

export default App;

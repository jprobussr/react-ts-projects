import { flashCards } from './data/FlashCard';
import Flashcard from './components/Flashcard';
import './App.css';


const App = () => {
  return (
    <main className="app">
      <h1>TS Flashcards</h1>


      <section className="flash-card-list">
        {flashCards.map((flashcard) => {
          return (
            <Flashcard
              key={flashcard.id}
              question={flashcard.question}
              answer={flashcard.answer}
            />
          )
        })}
      </section>

    </main>
  );
};

export default App;

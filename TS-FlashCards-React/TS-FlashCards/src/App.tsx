import { useState } from 'react';
import FlashCard from './components/FlashCard/FlashCard';
import { flashCards } from './data/flashCards';
import './App.css';

const App = () => {
  const [completedCardIds, setCompletedCardIds] = useState<number[]>([]);

  const handleToggleComplete = (id: number) => {
    setCompletedCardIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((cardId) => cardId !== id)
        : [...prevIds, id],
    );
  };

  const completedPercentage = Math.round(
    (completedCardIds.length / flashCards.length) * 100,
  );

  return (
    <main className="app">
      <header className="app-header">
        <h1>TypeScript Flash Cards</h1>
        <p>Study TypeScript one concept at a time.</p>
      </header>

      <p className="app-progress">
        Completed: {completedCardIds.length} / {flashCards.length} (
        {completedPercentage}%)
      </p>

      <div className="progress-bar">
        <div className='progress-bar__fill' style={{width: `${completedPercentage}%`}}></div>
      </div>

      <section className="card-grid">
        {flashCards.map((card) => {
          const isCompleted = completedCardIds.includes(card.id);

          return (
            <FlashCard
              key={card.id}
              question={card.question}
              answer={card.answer}
              topic={card.topic}
              difficulty={card.difficulty}
              isCompleted={isCompleted}
              onToggleComplete={() => handleToggleComplete(card.id)}
            />
          );
        })}
      </section>
    </main>
  );
};

export default App;

import type { FlashCardData } from '../data/FlashCard';
import { useState } from 'react';
import './Flashcard.css';

type FlashCardProps = Pick<FlashCardData, 'question' | 'answer'>;

const Flashcard = ({ question, answer }: FlashCardProps) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleToggleAnswer = () => {
    setShowAnswer((prevAnswer) => !prevAnswer);
  };

  return (
    <article className="flash-card">
      <h2>Question:</h2>
      <p>{question}</p>

      <button onClick={handleToggleAnswer}>
        {showAnswer ? 'Hide' : 'Show'}
      </button>

      {showAnswer && (
        <div className="flash-card__answer">
          <h2>Answer:</h2>
          <h3>{answer}</h3>
        </div>
      )}
    </article>
  );
};

export default Flashcard;

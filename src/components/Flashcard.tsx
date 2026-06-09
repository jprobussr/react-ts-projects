import type { FlashCardData } from '../data/FlashCard';
import { useState } from 'react';
import './Flashcard.css';

type FlashCardProps = Pick<
  FlashCardData,
  'topic' | 'difficulty' | 'question' | 'answer'
>;

const Flashcard = ({ question, answer, topic, difficulty }: FlashCardProps) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleToggleAnswer = () => {
    setShowAnswer((prevAnswer) => !prevAnswer);
  };

  const handleToggleCompleted = () => {
    setIsCompleted((prevIsCompleted) => !prevIsCompleted);
  };

  return (
    <article className="flash-card">
      <div className="flash-card__meta">
        <span className="flash-card__topic">{topic}</span>
        <span className="flash-card__difficulty">{difficulty}</span>
      </div>
      <h2>Question:</h2>
      <p>{question}</p>

      <button onClick={handleToggleAnswer}>
        {showAnswer ? 'Hide' : 'Show'}
      </button>

      <button onClick={handleToggleCompleted}>
        {isCompleted ? 'Completed' : 'Mark Complete'}
      </button>

      {isCompleted && (
        <p className="flash-card__completed">Nice work. Card completed.</p>
      )}

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

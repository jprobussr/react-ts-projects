import { useState } from 'react';
import type { FlashCard as FlashCardType } from '../../types/flashCard';
import './FlashCard.css';

type FlashCardProps = {
  question: FlashCardType['question'];
  answer: FlashCardType['answer'];
  topic: FlashCardType['topic'];
  difficulty: FlashCardType['difficulty'];
  isCompleted: boolean;
  onToggleComplete: () => void;
};

const FlashCard = ({
  question,
  answer,
  topic,
  difficulty,
  isCompleted,
  onToggleComplete,
}: FlashCardProps) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  

  const handleToggleAnswer = () => {
    setShowAnswer((prevAnswer) => !prevAnswer);
  };



  return (
    <article
      className={`flash-card ${isCompleted ? 'flash-card--completed' : ''}`}
    >
      <p className="flash-card__topic">{topic}</p>
      <h2 className="flash-card__question">{question}</h2>

      <button onClick={handleToggleAnswer}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>

      <button onClick={onToggleComplete}>
        {isCompleted ? 'Undo Complete' : 'Mark Complete'}
      </button>

      <div className="flash-card__answer-area">
        {showAnswer && <p className="flash-card__answer">{answer}</p>}
      </div>

      {isCompleted && (
        <p className="flash-card__completed">✅ Card Completed</p>
      )}

      <p className="flash-card__difficulty">{difficulty}</p>
    </article>
  );
};

export default FlashCard;

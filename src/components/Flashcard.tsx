import { useState } from "react";
import "./Flashcard.css";
import type { FlashCardData } from "../data/FlashCard";

type FlashCardProps = Pick<FlashCardData, "question" | "answer">;

const Flashcard = ({ question, answer }: FlashCardProps) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleToggleAnswer = () => {
    setShowAnswer((prevAnswer) => !prevAnswer);
  };

  return (
    <article className="flash-card">
      <h2>Question:</h2>
      <h2>{question}</h2>

      <button onClick={handleToggleAnswer}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {showAnswer && (
        <div className="flash-card__answer">
          <h2>Answer: </h2>
          <p>{answer}</p>
        </div>
      )}
    </article>
  );
};

export default Flashcard;

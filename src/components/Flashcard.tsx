
import "./Flashcard.css";
import { useState } from "react";

type FlashcardProps = {
  question: string;
  answer: string;
};

const Flashcard = ({ question, answer }: FlashcardProps) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleClick = () => {
    setShowAnswer((prevAnswer) => !prevAnswer);
  };

  return (
    <section className="flashcard">
      <h1>Developer Flashcards</h1>

      <h2>Question: </h2>
      <p>{question}</p>
      <button onClick={handleClick}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {showAnswer && (
        <>
            <h2>Answer:</h2>
            <p>{answer}</p>
        </>

      )}
    </section>
  );
};

export default Flashcard;

import type { FlashCard as FlashCardType } from "../../types/flashCard";
import "./FlashCard.css";

type FlashCardProps = {
  question: FlashCardType["question"];
  answer: FlashCardType["answer"];
  topic: FlashCardType["topic"];
  difficulty: FlashCardType["difficulty"];
};

const FlashCard = ({ question, answer, topic, difficulty }: FlashCardProps) => {
  return (
    <article className="flash-card">
      <p className="flash-card__topic">{topic}</p>
      <h2>{question}</h2>
      <p className="flash-card__answer">{answer}</p>
      <p className="flash-card__difficulty">{difficulty}</p>
    </article>
  );
};

export default FlashCard;

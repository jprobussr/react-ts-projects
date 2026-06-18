import type { FlashCard as FlashCardType } from "../../types/flashCard";

type FlashCardProps = {
  question: FlashCardType["question"];
  answer: FlashCardType["answer"];
  topic: FlashCardType["topic"];
  difficulty: FlashCardType["difficulty"];
};

const FlashCard = ({ question, answer, topic, difficulty }: FlashCardProps) => {
  return (
    <article>
      <p>{topic}</p>
      <h2>{question}</h2>
      <p>{answer}</p>
      <p>{difficulty}</p>
    </article>
  );
};

export default FlashCard;

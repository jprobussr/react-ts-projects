import type { FlashCard } from "../../types/flashCard";

type FlashCardProps = {
  question: FlashCard["question"];
  answer: FlashCard["answer"];
  topic: FlashCard["topic"];
  difficulty: FlashCard["difficulty"];
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

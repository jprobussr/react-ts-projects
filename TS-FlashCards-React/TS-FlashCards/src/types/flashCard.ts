export type Difficulty = "easy" | "medium" | "hard";

export type FlashCard = {
  id: number;
  question: string;
  answer: string;
  topic: string;
  difficulty: Difficulty;
};

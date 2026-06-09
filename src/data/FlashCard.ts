export type FlashCardDifficulty = "beginner" | "intermediate" | "advanced";

export type FlashCardData = {
  id: number;
  question: string;
  answer: string;
  topic: string;
  difficulty: FlashCardDifficulty;
};

export const flashCards: FlashCardData[] = [
  {
    id: 1,
    difficulty: "beginner",
    topic: 'TypeScript Basics',
    question: 'What is TypeScript?',
    answer: 'TypeScript is JavaScript with extra syntax for checking types.',
  },
  {
    id: 2,
    difficulty: "beginner",
    topic: 'Primitive Types',
    question: 'What does a string type represent?',
    answer: 'A string represents text, such as names, messages, or titles.',
  },
  {
    id: 3,
    difficulty: "beginner",
    topic: 'Primitive Types',
    question: 'What does a boolean type represent?',
    answer: 'A boolean represents true or false values.',
  },
];

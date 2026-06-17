export type Flashcard = {
  id: number;
  question: string;
  answer: string;
};

export const flashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is a TypeScript type?",
    answer: "A type describes what kind of value a variable can hold.",
  },
  {
    id: 2,
    question: "What is a prop in React?",
    answer: "Props allow data to be passed from parent to child components.",
  },
  {
    id: 3,
    question: "What does useState do?",
    answer: "It allows components to store and update state.",
  },
];

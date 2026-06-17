import type { FlashCard } from "../types/flashCard";

export const flashCards: FlashCard[] = [
  {
    id: 1,
    question: "What is a type alias in TypeScript?",
    answer:
      "A type alias gives a name to a type shape so we can reuse it in different places.",
    topic: "Type Aliases",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "What is a union type?",
    answer:
      "A union type allows a value to be one of several specific types or values.",
    topic: "Union Types",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What does FlashCard[] mean?",
    answer: "It means an array where every item must match the FlashCard type.",
    topic: "Arrays with Types",
    difficulty: "medium",
  },
  {
    id: 4,
    question: "Why do we import FlashCard as a type?",
    answer:
      "Because FlashCard is only used for TypeScript checking, not as a runtime JavaScript value.",
    topic: "Type Imports",
    difficulty: "medium",
  },
  {
    id: 5,
    question: "What is a generic in TypeScript?",
    answer:
      "A generic lets a type or function work with different data types while still staying type-safe.",
    topic: "Generics",
    difficulty: "hard",
  },
  {
    id: 6,
    question: "What is a tuple?",
    answer:
      "A tuple is an array with a fixed order and specific types for each position.",
    topic: "Tuples",
    difficulty: "medium",
  },
  {
    id: 7,
    question: "What is a function type?",
    answer:
      "A function type describes what parameters a function accepts and what type it returns.",
    topic: "Function Types",
    difficulty: "hard",
  },
  {
    id: 8,
    question: "Why separate data from components?",
    answer:
      "It keeps the app easier to read, test, update, and scale as more cards are added.",
    topic: "Project Structure",
    difficulty: "easy",
  },
];

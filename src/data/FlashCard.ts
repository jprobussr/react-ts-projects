export type FlashCardData = {
  id: number;
  question: string;
  answer: string;
};

export const flashCards: FlashCardData[] = [
  {
    id: 1,
    question: 'What is TypeScript?',
    answer: 'TypeScript is JavaScript with extra syntax for checking types.',
  },
  {
    id: 2,
    question: 'What does a string type represent?',
    answer: 'A string represents text, such as names, messages, or titles.',
  },
  {
    id: 3,
    question: 'What does a boolean type represent?',
    answer: 'A boolean represents true or false values.',
  },
];

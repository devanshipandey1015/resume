export type ProgressState = 'not-started' | 'learning' | 'revised' | 'interview-ready';

export type Topic = {
  id: string;
  title: string;
  category: string;
  short: string;
  simple: string[];
  technical: string[];
  interview: string;
  keyPoints?: string[];
  code?: string;
  followUps?: string[];
  cautions?: string[];
};

export type Project = {
  id: string;
  title: string;
  stack: string[];
  purpose: string;
  overview: string;
  flow: string[];
  whyStack: { label: string; text: string }[];
  interviewAnswer: string;
  questions: string[];
  verify: string[];
};

export type QuizQuestion = {
  id: string;
  category: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

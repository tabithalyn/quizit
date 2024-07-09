import axios from "axios";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] };

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correct_answer: string;
}

const shuffle = (array:string[]) => [...array].sort(() => Math.random()-0.5);

export const DIFFICULTY = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard"
}
type DIFFICULTY = typeof DIFFICULTY[keyof typeof DIFFICULTY];

export const CATEGORY = {
  GENERAL: "9",
  GEOGRAPHY: "22",
  HISTORY: "23",
  MUSIC: "12",
  SPORTS: "21",
  TELEVISION: "14"
}
type CATEGORY = typeof CATEGORY[keyof typeof CATEGORY];

export const CATEGORY_NAMES = {
  GENERAL: "General Knowledge",
  GEOGRAPHY: "Geography",
  HISTORY: "History",
  MUSIC: "Music",
  SPORTS: "Sports",
  TELEVISION: "Television"
}
type CATEGORY_NAMES = typeof CATEGORY_NAMES[keyof typeof CATEGORY_NAMES];

export const COLOR = {
  BLUE: "[#44C5CB]",
  RED: "[#F53D52]",
  ORANGE: "[#FF9200]",
  PURPLE: "[#8E44AD]",
  GREEN: "[#16A085]",
  YELLOW: "[#f2dd1c]"
}
type COLOR = typeof COLOR[keyof typeof COLOR];

export const fetchQuestions = async (amount:number, difficulty:DIFFICULTY, category:CATEGORY) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
  try {
    const response = await axios.get(endpoint);
    return response.data.results?.map((question:Question) => ({
      ...question, answers:shuffle([...question.incorrect_answers, question.correct_answer])
    }));
  } catch (error) {
    console.log(error);
  }
}
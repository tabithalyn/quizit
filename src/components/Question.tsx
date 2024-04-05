import { useEffect, useState } from "react";
import parse from "html-react-parser";

type Question = {
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Question = ({ color, selectedCategory, selectedDifficulty }:{
  color: string; 
  selectedCategory: number;
  selectedDifficulty: string;
}) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([""]);
  const [loading, setLoading] = useState(true);

  const shuffleArray = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const fetchQuestions = async (difficulty:string, category:number) => {
      const endpoint = `https://opentdb.com/api.php?amount=15&difficulty=${difficulty}&category=${category}&type=multiple`;
      setLoading(true);
      const data = await (await fetch(endpoint)).json();
      return data.results.map((question:Question) => {
        setQuestion(question.question);
        setAnswers(shuffleArray([question.correct_answer, ...question.incorrect_answers]));
        setLoading(false);
      })
    };
    fetchQuestions(selectedDifficulty, selectedCategory);
  }, [selectedCategory, selectedDifficulty]);

  return (
    <>
    {loading ? (
      <div className="w-full h-[77%] flex justify-center items-center">Loading...</div>
    ) : (
      <>
      <div className="w-full flex justify-center px-5 py-10 font-bold text-[#0c3234] text-3xl text-center">
        {parse(question)}
      </div>
      <hr className={`w-[87%] h-[2px] bg-[${color}] mx-auto`}></hr>
      <div className="w-full h-[55%] flex flex-wrap justify-center p-10 gap-3">
        {answers.map((answer:string, index:number) => (
          <div className={`w-full h-1/4 rounded-xl bg-[${color}] hover:opacity-80 flex justify-center items-center hover:cursor-pointer transition-all hover:tracking-wide py-2`} key={index}>
            <span className="text-2xl font-medium">{parse(answer)}</span>
          </div>
        ))}
      </div>
      </>
    )}
    </>
  );
}
 
export default Question;
import { useState } from "react";
import parse from "html-react-parser";
import { AnswerObject } from "../api/api";

type PropsType = {
  question: string;
  answers: string[];
  callback: (e:React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
  correct: string;
  selected: boolean;
  setSelected: (arg0:boolean) => void;
  color: string; 
  selectedCategory: string;
  selectedDifficulty: string;
  score: number;
}


const Question = (props:PropsType) => {
  const [active, setActive] = useState("");

  return (
    <div className="-mt-5">
      <div className="w-full flex-wrap flex justify-around mt-10 mb-4">
        <p className="text-2xl sm:text-xl font-bold">
          Score:{" "}
          <span className={`bg-${props.color} py-1 px-3 rounded-lg`}>{props.score}</span>
        </p>
        <p className="text-2xl sm:text-xl font-bold">
          {props.questionNum} / {props.totalQuestions}
        </p>
      </div>
      <div className="w-full flex justify-center px-3 pb-5 pt-8 font-bold text-[#0c3234] text-3xl sm:text-2xl text-center">
        {parse(props.question)}
      </div>
      <hr className={`w-[87%] h-[2px] bg-${props.color} mx-auto`}></hr>
      <div className="w-full h-[55%] flex flex-wrap justify-center px-10 pt-6 mb-8 gap-5">
        {props.answers?.map((answer:string, index:number) => (
          <div
            onClick={() => {
              setActive(answer);
              props.setSelected(true);
            }}
            key={index}
          >
            <button
              disabled={props.userAnswer ? true : false}
              value={answer}
              onClick={props.callback}
              className={
                answer === props.correct && answer === active && props.selected ? "flex flex-wrap justify-center items-center  md:w-[400px] md:h-[100px] sm:w-[300px] p-3 bg-emerald-600 border-emerald-800 border-2 rounded-xl text-2xl sm:text-xl font-medium" :
                answer !== props.correct && answer === active && props.selected ? "flex flex-wrap justify-center items-center  md:w-[400px] md:h-[100px] sm:w-[300px] p-3 bg-rose-600 border-rose-800 border-2 rounded-xl text-2xl sm:text-xl font-medium" :
                answer === props.correct && answer !== active && props.selected ? "flex flex-wrap justify-center items-center  md:w-[400px] md:h-[100px] sm:w-[300px] p-3 bg-emerald-600 border-emerald-800 border-2 rounded-xl text-2xl sm:text-xl font-medium" : 
                "border-stone-200 border-2 rounded-xl flex flex-wrap md:w-[400px] md:h-[100px] sm:w-[300px] p-3 items-center justify-center text-2xl sm:text-xl font-medium transition-all hover:bg-stone-200 disabled:hover:bg-inherit"
              }
            >
              <div
                className={
                  answer === props.correct && answer === active && props.selected ? "w-full h-full flex flex-wrap justify-center items-center bg-emerald-600 text-2xl sm:text-xl font-medium" :
                  answer !== props.correct && answer === active && props.selected ? "w-full h-full flex flex-wrap justify-center items-center bg-rose-600 text-2xl sm:text-xl font-medium" :
                  answer === props.correct && answer !== active && props.selected ? "w-full h-full flex flex-wrap justify-center items-center bg-emerald-600 text-2xl sm:text-xl font-medium" : ""
                }
              >
                <span>{parse(answer)}</span>
              </div>
            </button>
          </div>
        ))}
      </div>
      </div>
  );
}
 
export default Question;
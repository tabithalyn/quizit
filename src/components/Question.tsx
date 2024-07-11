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
        <div className="w-1/3 xs:text-lg md:text-2xl lg:text-2xl sm:text-xl font-bold">
          Score:{" "}
          <span className={`bg-${props.color} py-1 px-3 rounded-lg`}>{props.score}</span>
        </div>
        <div className="w-1/3 xs:text-lg md:text-2xl lg:text-2xl sm:text-xl font-bold">
          {props.questionNum} / {props.totalQuestions}
        </div>
      </div>
      <div className="w-full flex justify-center px-3 pb-5 xs:pt-4 sm:pt-6 md:pt-8 lg:pt-8 font-bold text-[#0c3234] xs:text-xl md:text-3xl lg:text-3xl sm:text-2xl text-center">
        {parse(props.question)}
      </div>
      <hr className={`w-[87%] h-[2px] bg-${props.color} mx-auto`}></hr>
      <div className="w-full h-[55%] flex flex-wrap justify-center px-10 pt-6 mb-8 xs:gap-2 sm:gap-3 md:gap-5 lg:gap-5">
        {props.answers?.map((answer:string, index:number) => (
          <div
            onClick={() => {
              setActive(answer);
              props.setSelected(true);
            }}
            key={index}
            className="flex flex-wrap justify-center items-start xs:w-full xs:h-full sm:w-full sm:h-full md:w-[48%] md:h-[100px] lg:w-[48%] lg:h-[100px] xl:w-[48%] xl:h-[100px]"
          >
            <button
              disabled={props.userAnswer ? true : false}
              value={answer}
              onClick={props.callback}
              className={
                answer === props.correct && answer === active && props.selected ? "flex flex-wrap justify-center items-center bg-emerald-600 border-emerald-800 border-2 rounded-xl font-medium p-3 w-full h-full xs:text-lg sm:text-xl md:text-xl lg:text-2xl" :
                answer !== props.correct && answer === active && props.selected ? "flex flex-wrap justify-center items-center bg-rose-600 border-rose-800 border-2 rounded-xl font-medium p-3 w-full h-full xs:text-lg sm:text-xl md:text-xl lg:text-2xl" :
                answer === props.correct && answer !== active && props.selected ? "flex flex-wrap justify-center items-center bg-emerald-600 border-emerald-800 border-2 rounded-xl font-medium p-3 w-full h-full xs:text-lg sm:text-xl md:text-xl lg:text-2xl" : 
                "flex flex-wrap justify-center items-center hover:bg-stone-200 border-stone-200 border-2 rounded-xl font-medium p-3 transition-all disabled:hover:bg-inherit w-full h-full xs:text-lg sm:text-xl md:text-xl lg:text-2xl"
              }
            >
              <div
                className={
                  answer === props.correct && answer === active && props.selected ? "w-full h-full flex flex-wrap justify-center items-center bg-emerald-600 xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-medium" :
                  answer !== props.correct && answer === active && props.selected ? "w-full h-full flex flex-wrap justify-center items-center bg-rose-600 xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-medium" :
                  answer === props.correct && answer !== active && props.selected ? "w-full h-full flex flex-wrap justify-center items-center bg-emerald-600 xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-medium" : ""
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
import { Link } from "react-router-dom";
import Answers from "./Answers";

type ResultProps = {
  score: number;
  numQuestions: number;
  setGameOver: (arg0:boolean) => void;
  setShowResults: (arg0:boolean) => void;
  color: string;
  setTotalQuestions: (arg0:number) => void;
}

const results = (props:ResultProps) => {

  return (
    <div className="flex flex-wrap absolute justify-center items-center w-screen h-screen top-0 left-0 p-2 z-50">
      <div className="bg-[#f3f3f3] z-50 w-[80%] h-[80%] grid grid-cols-4 grid-rows-6">
        <p className="bg-[#f3f3f3] p-1 text-center font-bold w-full flex flex-wrap justify-center items-center col-span-4 row-span-3 text-[2rem]">
          <span className="mr-3">Your Final Score:</span>
          <span className={`bg-${props.color} py-1 px-3 rounded-lg`}>{props.score}</span> / {props.numQuestions}
          <span className="w-full">
            {
              (props.score / props.numQuestions) * 100
            }%
          </span>
        </p>
        <Answers props={{
          color: props.color
        }} />
        <p className="bg-[#f3f3f3] opacity-100 text-center text-xl col-span-2 row-span-1 flex flex-wrap justify-center items-center">
          <button
            className={`bg-${props.color} opacity-90 hover:opacity-80 hover:cursor-pointer transition-all uppercase py-3 xs:px-5 sm:px-8 md:px-8 lg:px-10 xl:px-10 font-medium tracking-wide xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl rounded-3xl`}
            onClick={() => {
              props.setGameOver(true);
              props.setShowResults(false);
              props.setTotalQuestions(5);
            }}
          >
            New Game <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
        </p>
        <p className="bg-[#f3f3f3] opacity-100 text-center text-xl flex flex-wrap justify-center col-span-2 row-span-1 items-center">
          <Link to="/">
            <button className={`bg-${props.color} opacity-80 hover:opacity-100 hover:cursor-pointer transition-all uppercase py-3 xs:px-6 sm:px-8 md:px-8 lg:px-10 xl:px-10 font-medium tracking-wide text-lg rounded-3xl`}>
              Exit <i className="fa-solid fa-person-running"></i>
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
 
export default results;
import { Link } from "react-router-dom";

type ResultProps = {
  score: number;
  numQuestions: number;
  setGameOver: (arg0:boolean) => void;
  color: string;
}

const results = (props:ResultProps) => {

  return (
    <div className="bg-[#f3f3f3] flex justify-center items-center flex-wrap opacity-100 pb-2 z-50 xs:w-[83%] sm:w-[82%] md:w-[80%] lg:w-[80%] xl:w-[80%] h-[15%] -mt-[167px]">
      <p className="bg-[#f3f3f3] p-1 opacity-100 xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 text-center xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold flex flex-wrap items-center justify-center">Your Final Score:{" "}
        <span className={`bg-${props.color} py-1 px-3 rounded-lg`}>{props.score}</span> / {props.numQuestions}
      </p>
      <p className="bg-[#f3f3f3] opacity-100 lg:w-1/3 xl:w-1/3 sm:w-1/2 md:w-1/2 text-center text-xl xs:w-[60%]">
        <button
          className={`bg-${props.color} opacity-90 hover:opacity-80 hover:cursor-pointer transition-all uppercase py-3 xs:px-5 sm:px-8 md:px-8 lg:px-10 xl:px-10 font-medium tracking-wide xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl rounded-3xl`}
          onClick={() => props.setGameOver(true)}
        >
          New Game <i className="fa-solid fa-arrow-rotate-right"></i>
        </button>
      </p>
      <p className="bg-[#f3f3f3] opacity-100 lg:w-1/3 xl:w-1/3 sm:w-1/2 md:w-1/2 text-center text-xl xs:w-[40%] flex flex-wrap justify-center">
        <Link to="/">
          <button className={`bg-${props.color} opacity-80 hover:opacity-100 hover:cursor-pointer transition-all uppercase py-3 xs:px-6 sm:px-8 md:px-8 lg:px-10 xl:px-10 font-medium tracking-wide text-lg rounded-3xl`}>
            Exit <i className="fa-solid fa-person-running"></i>
          </button>
        </Link>
      </p>
    </div>
  );
}
 
export default results;
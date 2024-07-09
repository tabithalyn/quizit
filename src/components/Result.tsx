import { Link } from "react-router-dom";

type ResultProps = {
  score: number;
  numQuestions: number;
  setGameOver: (arg0:boolean) => void;
  color: string;
}

const results = (props:ResultProps) => {
  return (
    <div className="bg-[#f2f6f6] flex justify-center items-center flex-wrap opacity-100 pb-2 z-50 w-[75%] h-[15%] -mt-[167px]">
      <p className="bg-[#f2f6f6] p-1 opacity-100 w-1/3 text-center -mb-2 text-xl font-bold">Your Final Score:{" "}
      <span className={`bg-${props.color} py-1 px-3 rounded-lg`}>{props.score}</span> / {props.numQuestions}</p>
      <p className="bg-[#f2f6f6] p-1 opacity-100 w-1/3 text-center -mb-2 text-xl">
        <button className={`bg-${props.color} opacity-90 hover:opacity-80 hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl mr-3`} onClick={() => props.setGameOver(true)}>
          Play Again <i className="fa-solid fa-arrow-rotate-right"></i>
        </button>
      </p>
      <p className="bg-[#f2f6f6] p-1 opacity-100 w-1/3 text-center -mb-2 text-xl">
        <Link to="/">
          <button className={`bg-${props.color} opacity-80 hover:opacity-100 hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl mr-3`}>
            Exit <i className="fa-solid fa-person-running"></i>
          </button>
        </Link>
      </p>
    </div>
  );
}
 
export default results;
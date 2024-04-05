import { useState } from "react";
import { Link } from "react-router-dom";
import StartScreen from "../components/StartScreen";
import Question from "../components/Question";

const TvQuiz = () => {
  const [startScreen, setStartScreen] = useState<boolean>(true);
  const [includeTimer, setIncludeTimer] = useState<boolean>(false);
  const [chosenDifficulty, setChosenDifficulty] = useState<string>("easy");

  const handleCheck = () => {
    setIncludeTimer(!includeTimer);
  }

  // ebd723 cdb90b
  
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#f2dd1c] flex flex-wrap justify-center items-center">
      {startScreen ? (
        <div className="w-screen h-screen overflow-hidden flex flex-wrap justify-center items-center absolute">
          <StartScreen handleCheck={handleCheck} includeTimer={includeTimer} categoryName="Television" chosenDifficulty={chosenDifficulty} setChosenDifficulty={setChosenDifficulty} />
          <div className="w-full -mt-[300px] flex flex-wrap justify-center gap-5">
            <Link to="/"><button className="bg-[#f8eb75] hover:bg-[#e5d330] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl mr-3">Back</button></Link>
            <button className="bg-[#f8eb75] hover:bg-[#e5d330] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl ml-3" onClick={() => setStartScreen(false)}>Start</button>
          </div>
        </div>
      ) : (
        <div className="w-4/5 h-4/5 bg-[#f7f7f5] rounded-2xl">
          <Question color="#ebd723" selectedCategory={14} selectedDifficulty={chosenDifficulty} />
          <div className="flex justify-between p-8">
            <Link to="/"><button className="bg-[#f8eb75] hover:bg-[#e5d330] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl mr-3">Quit</button></Link>
            <button className="bg-[#f8eb75] hover:bg-[#e5d330] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Skip</button>
            <button className="bg-[#f8eb75] hover:bg-[#e5d330] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default TvQuiz;
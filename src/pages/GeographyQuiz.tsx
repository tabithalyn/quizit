import { useState } from "react";
import { Link } from "react-router-dom";
import StartScreen from "../components/StartScreen";
import Question from "../components/Question";

const GeographyQuiz = () => {
  const [startScreen, setStartScreen] = useState<boolean>(true);
  const [includeTimer, setIncludeTimer] = useState<boolean>(false);
  const [chosenDifficulty, setChosenDifficulty] = useState<string>("");

  const handleCheck = () => {
    setIncludeTimer(!includeTimer);
  }
  
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#FF9200] flex flex-wrap justify-center items-center">
      {startScreen ? (
      <div className="w-screen h-screen overflow-hidden flex flex-wrap justify-center items-center absolute">
        <StartScreen handleCheck={handleCheck} includeTimer={includeTimer} categoryName="Geography" setChosenDifficulty={setChosenDifficulty} chosenDifficulty={chosenDifficulty} />
        <div className="w-full -mt-[300px] flex flex-wrap justify-center gap-5">
          <Link to="/"><button className="bg-[#f8cf75] hover:bg-[#ecaa25] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl mr-3">Back</button></Link>
          <button className="bg-[#f8cf75] hover:bg-[#ecaa25] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl ml-3" onClick={() => setStartScreen(false)}>Start</button>
        </div>
      </div>
      ) : (
      <div className="w-4/5 h-4/5 bg-[#f8f7f7] rounded-2xl">
        <Question color="#ffc550" selectedCategory={22} selectedDifficulty={chosenDifficulty} />
          <div className="flex justify-between py-8 px-10">
            <Link to="/"><button className="bg-[#f8cf75] hover:bg-[#ecaa25] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl mr-3">Quit</button></Link>
            <button className="bg-[#f8cf75] hover:bg-[#ecaa25] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Skip</button>
            <button className="bg-[#f8cf75] hover:bg-[#ecaa25] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default GeographyQuiz;
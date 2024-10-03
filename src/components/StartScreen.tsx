import { Link } from "react-router-dom";
import { DIFFICULTY } from "../api/api";

const StartScreen = ({ categoryName, setChosenDifficulty, setNumQuestions, color, setFormSubmitted }:{
  categoryName: string;
  setChosenDifficulty: (arg0:string) => void;
  setNumQuestions: (arg0:number) => void;
  color: string;
  setFormSubmitted: (arg0:boolean) => void;
}) => {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <div className="w-screen h-[90%] flex flex-wrap justify-center items-center">
      <div className="xs:w-full sm:w-4/5 md:w-4/5 lg:w-3/5 xl:h-3/5 bg-[#f3f3f3] rounded-2xl flex flex-wrap items-start justify-center">
        <div className="w-full flex flex-wrap justify-center items-center p-10 -mt-8">
          <div className="w-full xs:text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center px-2 py-10">
            {categoryName} Quiz
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-wrap justify-center p-5 xs:text-base sm:text-xl md:text-lg lg:text-xl -mt-5">
              <label htmlFor="amount" className="font-bold xs:text-lg sm:text-xl md:text-xl lg:text-3xl w-full text-center mb-4 mt-2">Choose # of Questions:</label>
              <select
                name="amount"
                id="amount"
                onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                className="py-1 px-3 border-0 rounded-xl xs: text-base sm:text-lg md:text-lg lg:text-xl"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className="w-full flex flex-wrap justify-center">
            <h1 className="w-full text-center xs:text-lg sm:text-xl md:text-xl lg:text-3xl mb-4 font-bold">Choose Your Difficulty:</h1>
              <input
                type="radio"
                id="easy"
                value={DIFFICULTY.EASY}
                name="difficulty"
                onChange={(e) => setChosenDifficulty(e.target.value)}
                checked
              />
              <label htmlFor="easy" className="xs:text-base sm:text-base md:text-lg lg:text-xl ml-1 mr-5">Easy</label>
              <input
                type="radio"
                id="medium"
                value={DIFFICULTY.MEDIUM}
                name="difficulty"
                onChange={(e) => setChosenDifficulty(e.target.value)}
              />
              <label htmlFor="medium" className="xs:text-base sm:text-base md:text-lg lg:text-xl ml-1 mr-5">Medium</label>
              <input
                type="radio"
                id="hard"
                value={DIFFICULTY.HARD}
                name="difficulty"
                onChange={(e) => setChosenDifficulty(e.target.value)}
              />
              <label htmlFor="hard" className="xs:text-base sm:text-base md:text-lg lg:text-xl ml-1">Hard</label>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-2 mt-8">
              <Link to="/"><button className={`bg-${color} opacity-90 hover:opacity-80 hover:cursor-pointer transition-all uppercase py-3 xs:px-5 sm:px-5 md:px-10 lg:px-10 font-medium tracking-wide xs:text-base sm:text-lg md:text-lg lg:text-lg rounded-3xl mr-3`}>Back</button></Link>
              <button className={`bg-${color} opacity-90 hover:opacity-80 hover:cursor-pointer transition-all uppercase py-3 xs:px-5 sm:px-5 md:px-10 lg:px-10 font-medium tracking-wide xs:text-base sm:text-lg md:text-lg lg:text-lg rounded-3xl mr-3`} type="submit">Start</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default StartScreen;
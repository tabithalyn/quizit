import { Link } from "react-router-dom";

const StartScreen = ({ categoryName, handleCheck, includeTimer, setChosenDifficulty, setNumQuestions, startGame, color }:{
  categoryName: string;
  handleCheck: () => void;
  includeTimer: boolean;
  setChosenDifficulty: (arg0:string) => void;
  setNumQuestions: (arg0:number) => void;
  startGame: () => void;
  color: string;
}) => {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    startGame();
  }

  return (
    <div className="w-screen h-[90%] flex flex-wrap justify-center items-center">
      <div className="w-3/5 h-3/5 bg-[#f2f6f6] rounded-2xl flex flex-wrap items-start justify-center">
        <div className="w-full flex flex-wrap justify-center items-center p-10 -mt-8">
          <div className="w-full text-5xl font-bold text-center px-5 py-10">
            {categoryName} Quiz
          </div>
          <form onSubmit={handleSubmit}>
            <h1 className="w-full text-center text-3xl mb-4 font-bold">Choose Your Difficulty:</h1>
            <div className="w-full flex flex-wrap justify-center">
              <input type="radio" id="easy" name="difficulty" onChange={(e) => setChosenDifficulty(e.target.value)} checked />
              <label htmlFor="easy" className="text-xl ml-1 mr-5">Easy</label>
              <input type="radio" id="medium" name="difficulty" onChange={(e) => setChosenDifficulty(e.target.value)} />
              <label htmlFor="medium" className="text-xl ml-1 mr-5">Medium</label>
              <input type="radio" id="hard" name="difficulty" onChange={(e) => setChosenDifficulty(e.target.value)} />
              <label htmlFor="hard" className="text-xl ml-1">Hard</label>
            </div>
            <div className="w-full flex flex-wrap justify-center p-5 text-xl">
              <label htmlFor="amount" className="font-bold text-3xl w-full text-center mb-4 mt-2">Choose # of Questions:</label>
              <select name="amount" id="amount" onChange={(e) => setNumQuestions(parseInt(e.target.value))} className="py-1 px-3 ml-5 border-0 rounded-xl">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className="w-full flex justify-center mt-2">
              <label htmlFor="timer">
                <input type="checkbox" name="timer" id="timer" checked={includeTimer} onChange={handleCheck} className="mr-2" />
                Include Timer?
              </label>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-5 mt-10">
              <Link to="/"><button className={`bg-${color} opacity-90 hover:opacity-80 hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl mr-3`}>Back</button></Link>
              <button className={`bg-${color} opacity-90 hover:opacity-80 hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl mr-3`} type="submit" onClick={startGame}>Start</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default StartScreen;

const StartScreen = ({ categoryName, handleCheck, includeTimer, chosenDifficulty, setChosenDifficulty }:{
  categoryName: string;
  handleCheck: () => void;
  includeTimer: boolean;
  chosenDifficulty: string;
  setChosenDifficulty: (arg0:string) => void;
}) => {

  return (
    <div className="w-screen h-screen flex flex-wrap justify-center items-center">
      <div className="w-4/5 h-4/5 bg-[#f2f6f6] rounded-2xl flex flex-wrap items-start justify-center">
        <div className="w-full flex flex-wrap justify-center items-center p-10">
          <div className="w-full text-5xl font-bold text-center px-5 py-10">
            {categoryName} Quiz
          </div>
          <h1 className="w-full text-center text-3xl mb-4 font-bold">Choose Your Difficulty:</h1>
          <div className="w-full flex flex-wrap justify-center">
            <input type="radio" name="difficulty" value="easy" onChange={(e:{target:{value:string}}) => setChosenDifficulty(e.target.value)} id="easy" defaultChecked />
            <label htmlFor="easy" className={`mr-4 ml-1 capitalize ${chosenDifficulty === "easy" ? "font-bold" : ""}`}>Easy</label>
            <input type="radio" name="difficulty" value="medium" onChange={(e:{target:{value:string}}) => setChosenDifficulty(e.target.value)} id="medium" />
            <label htmlFor="medium" className={`mr-4 ml-1 capitalize ${chosenDifficulty === "medium" ? "font-bold" : ""}`}>Medium</label>
            <input type="radio" name="difficulty" value="hard" onChange={(e:{target:{value:string}}) => setChosenDifficulty(e.target.value)} id="hard" />
            <label htmlFor="hard" className={`mr-4 ml-1 capitalize ${chosenDifficulty === "hard" ? "font-bold" : ""}`}>Hard</label>
          </div>
          <div className="w-full flex justify-center mt-8">
            <label htmlFor="timer">
              <input type="checkbox" name="timer" id="timer" checked={includeTimer} onChange={handleCheck} className="mr-2" />
              Include Timer?
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default StartScreen;
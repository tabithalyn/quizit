import { Link } from "react-router-dom";

const TvMoviesQuiz = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#f2dd1c] flex flex-wrap justify-center items-center">
      <div className="w-4/5 h-4/5 bg-[#f7f7f5] rounded-2xl">
        <div className="w-full flex justify-center px-5 py-10 font-bold text-[#1e1c06] text-3xl">In DC comics where does the Green Arrow (Oliver Queen) live?</div>
        <hr className="w-[87%] h-[2px] bg-[#cab600] mx-auto"></hr>
        <div className="w-full h-[55%] flex flex-wrap justify-center p-10 gap-3">
          <div className="w-full h-1/4 rounded-xl bg-[#e5d330] flex justify-center items-center hover:bg-[#cdb90b] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Central City</span>
          </div>
          <div className="w-full h-1/4 rounded-xl bg-[#e5d330] flex justify-center items-center hover:bg-[#cdb90b] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Star City</span>
          </div>
          <div className="w-full h-1/4 rounded-xl bg-[#ebd723] flex justify-center items-center hover:bg-[#cdb90b] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Gotham City</span>
          </div>
          <div className="w-full h-1/4 rounded-xl bg-[#e5d330] flex justify-center items-center hover:bg-[#cdb90b] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Metropolis</span>
          </div>
        </div>
        <div className="flex justify-between p-8">
          <Link to="/"><button className="bg-[#f8eb75] hover:bg-[#e5d330] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl mr-3">Quit</button></Link>
          <button className="bg-[#f8eb75] hover:bg-[#e5d330] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Skip</button>
          <button className="bg-[#f8eb75] hover:bg-[#e5d330] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Submit</button>
        </div>
      </div>
    </div>
  );
}
 
export default TvMoviesQuiz;
import { Link } from "react-router-dom";

const HistoryQuiz = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#F53D52] flex flex-wrap justify-center items-center">
      <div className="w-4/5 h-4/5 bg-[#f4f2f2] rounded-2xl">
        <div className="w-full flex justify-center px-5 py-10 font-bold text-[#1e0606] text-3xl">In DC comics where does the Green Arrow (Oliver Queen) live?</div>
        <hr className="w-[87%] h-[2px] bg-[#eb3c50] mx-auto"></hr>
        <div className="w-full h-[55%] flex flex-wrap justify-center p-10 gap-3">
          <div className="w-full h-1/4 rounded-xl bg-[#ff6e7f] flex justify-center items-center hover:bg-[#eb4054] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Central City</span>
          </div>
          <div className="w-full h-1/4 rounded-xl bg-[#ff6e7f] flex justify-center items-center hover:bg-[#eb4054] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Star City</span>
          </div>
          <div className="w-full h-1/4 rounded-xl bg-[#ff6e7f] flex justify-center items-center hover:bg-[#eb4054] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Gotham City</span>
          </div>
          <div className="w-full h-1/4 rounded-xl bg-[#ff6e7f] flex justify-center items-center hover:bg-[#eb4054] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Metropolis</span>
          </div>
        </div>
        <div className="flex justify-between py-8 px-10">
          <Link to="/"><button className="bg-[#ffa9b3] hover:bg-[#ff6e7f] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl mr-3">Quit</button></Link>
          <button className="bg-[#ffa9b3] hover:bg-[#ff6e7f] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Skip</button>
          <button className="bg-[#ffa9b3] hover:bg-[#ff6e7f] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Submit</button>
        </div>
      </div>
    </div>
  );
}
 
export default HistoryQuiz;
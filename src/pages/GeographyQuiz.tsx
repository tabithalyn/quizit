import { Link } from "react-router-dom";

const GeographyQuiz = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#FF9200] flex flex-wrap justify-center items-center">
      <div className="w-4/5 h-4/5 bg-[#f8f7f7] rounded-2xl">
      <div className="w-full flex justify-center px-5 py-10 font-bold text-[#261509] text-3xl">In DC comics where does the Green Arrow (Oliver Queen) live?</div>
        <hr className="w-[87%] h-[2px] bg-[#f8891b] mx-auto"></hr>
        <div className="w-full h-[55%] flex flex-wrap justify-center p-10 gap-3">
          <div className="w-full h-1/4 rounded-xl bg-[#ffc550] flex justify-center items-center hover:bg-[#ec8925] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Central City</span>
          </div>
          <div className="w-full h-1/4 rounded-xl bg-[#ffc550] flex justify-center items-center hover:bg-[#ec8925] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Star City</span>
          </div>
          <div className="w-full h-1/4 rounded-xl bg-[#ffc550] flex justify-center items-center hover:bg-[#ec8925] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Gotham City</span>
          </div>
          <div className="w-full h-1/4 rounded-xl bg-[#ffc550] flex justify-center items-center hover:bg-[#ec8925] hover:cursor-pointer transition-all hover:tracking-wide">
            <span className="text-2xl font-medium">Metropolis</span>
          </div>
        </div>
        <div className="flex justify-between py-8 px-10">
          <Link to="/"><button className="bg-[#f8cf75] hover:bg-[#ecaa25] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl mr-3">Quit</button></Link>
          <button className="bg-[#f8cf75] hover:bg-[#ecaa25] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Skip</button>
          <button className="bg-[#f8cf75] hover:bg-[#ecaa25] hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-2xl ml-3">Submit</button>
        </div>
      </div>
    </div>
  );
}
 
export default GeographyQuiz;
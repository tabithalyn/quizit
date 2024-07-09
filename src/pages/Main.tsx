import { Link } from "react-router-dom";

// https://github.com/tabithalyn/quizzy/tree/main/src

const shadowStyle = "4px 4px 0px #000, 1px 4px 0px #000, 4px 1px 0px #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000, 2px 0px 0 #000, 0px 2px 0 #000, -2px 0px 0 #000, 0px -2px 0 #000";

const Main = () => {
  return (
    <div className="w-screen h-screen overflow-hidden m-0 p-0 flex flex-wrap">
      <div className="w-1/3 h-1/2 bg-[#44C5CB] flex flex-wrap justify-center items-center">
        <div className="w-auto">
          <span className="text-[#f6f6f6] text-4xl font-extrabold hover:text-[#c7f6fb] hover:cursor-pointer transition-all" style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/general">General</Link>
          </span>
        </div>
      </div>
      <div className="w-1/3 h-1/2 bg-[#f2dd1c] flex flex-wrap justify-center items-center">
        <div className="w-auto">
          <span className="text-[#f6f6f6] text-4xl font-extrabold hover:text-yellow-100 hover:cursor-pointer transition-all" style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/tv">Television</Link>
          </span>
        </div>
      </div>
      <div className="w-1/3 h-1/2 bg-[#8E44AD] flex flex-wrap justify-center items-center">
        <div className="w-auto">
          <span className="text-[#f6f6f6] text-4xl font-extrabold hover:text-[#d0cae8] hover:cursor-pointer transition-all" style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/music">Music</Link>
          </span>
        </div>
      </div>
      <div className="w-1/3 h-1/2 bg-[#F53D52] flex flex-wrap justify-center items-center">
        <div className="w-auto">
          <span className="text-[#f6f6f6] text-4xl font-extrabold hover:text-[#ffc6cb] hover:cursor-pointer transition-all" style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/history">History</Link>
          </span>
        </div>
      </div>
      <div className="w-1/3 h-1/2 bg-[#FF9200] flex flex-wrap justify-center items-center">
        <div className="w-auto">
          <span className="text-[#f6f6f6] text-4xl font-extrabold hover:text-[#ffe8c9] hover:cursor-pointer transition-all" style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/geography">Geography</Link>
          </span>
        </div>
      </div>
      <div className="w-1/3 h-1/2 bg-[#16A085] flex flex-wrap justify-center items-center">
        <div className="w-auto">
          <span className="text-[#f6f6f6] text-4xl font-extrabold hover:text-[#b4ffe2] hover:cursor-pointer transition-all" style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/sports">Sports</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
 
export default Main;
import { Link } from "react-router-dom";
import "../assets/home.style.css";

const categoryText = "text-[#f6f6f6] text-4xl font-extrabold hover:cursor-pointer transition-all z-50";
const shadowStyle = "4px 4px 0px #000, 1px 4px 0px #000, 4px 1px 0px #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000, 2px 0px 0 #000, 0px 2px 0 #000, -2px 0px 0 #000, 0px -2px 0 #000";

const Home = () => {
  return (
    <div className="w-full h-[99vh] flex flex-wrap justify-between items-center overflow-hidden gap-0 px-10 bg-[#f7f4cc]">
      <div className="w-full text-center flex flex-wrap justify-center">
        <span className="text-4xl font-black w-full">Test Your Knowledge!</span>
        <span className="w-full">Quiz yourself on any of the following 6 categories:</span>
      </div>
      <div className="blue flex flex-wrap justify-center items-center bg-[#44C5CB]">
        <span className={categoryText} style={{ textShadow: `${shadowStyle}` }}>
          <Link to="/general">General</Link>
        </span>
      </div>
      <div className="yellow flex flex-wrap justify-center items-center bg-[#f2dd1c]">
        <span className={`${categoryText} hover:text-yellow-100`} style={{ textShadow: `${shadowStyle}` }}>
          <Link to="/tv">Television</Link>
        </span>
      </div>
      <div className="purple flex flex-wrap justify-center items-center bg-[#8E44AD]">
        <span className={`${categoryText} hover:text-[#d0cae8]`} style={{ textShadow: `${shadowStyle}` }}>
          <Link to="/music">Music</Link>
        </span>
      </div>
      <div className="red flex flex-wrap justify-center items-center bg-[#F53D52]">
        <span className={`${categoryText} hover:text-[#ffc6cb]`} style={{ textShadow: `${shadowStyle}` }}>
          <Link to="/history">History</Link>
        </span>
      </div>
      <div className="orange flex flex-wrap justify-center items-center bg-[#FF9200]">
        <span className={`${categoryText} hover:text-[#ffe8c9]`} style={{ textShadow: `${shadowStyle}` }}>
          <Link to="/geography">Geography</Link>
        </span>
      </div>
      <div className="green flex flex-wrap justify-center items-center bg-[#16A085]">
        <span className={`${categoryText} hover:text-[#b4ffe2]`} style={{ textShadow: `${shadowStyle}` }}>
          <Link to="/sports">Sports</Link>
        </span>
      </div>
    </div>
  );
}
 
export default Home;
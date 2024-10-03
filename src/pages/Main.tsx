import { Link } from "react-router-dom";

const shadowStyle = "4px 4px 0px #000, 1px 4px 0px #000, 4px 1px 0px #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000, 2px 0px 0 #000, 0px 2px 0 #000, -2px 0px 0 #000, 0px -2px 0 #000";
const categoryDiv = "md:w-1/2 md:h-1/3 lg:w-1/3 lg:h-1/2 sm:w-1/2 xs:w-full flex flex-wrap justify-center items-center"
const categoryText = "text-[#f6f6f6] text-4xl font-extrabold hover:cursor-pointer transition-all"

const Main = () => {
  return (
    <div className="w-screen h-screen overflow-hidden m-0 p-0 flex flex-wrap">
      <div className={`${categoryDiv} bg-[#44C5CB]`}>
        <div className="w-auto">
          <span className={categoryText} style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/general">General</Link>
          </span>
        </div>
      </div>
      <div className={`${categoryDiv} bg-[#f2dd1c]`}>
        <div className="w-auto">
          <span className={`${categoryText} hover:text-yellow-100`} style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/tv">Television</Link>
          </span>
        </div>
      </div>
      <div className={`${categoryDiv} bg-[#8E44AD]`}>
        <div className="w-auto">
          <span className={`${categoryText} hover:text-[#d0cae8]`} style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/music">Music</Link>
          </span>
        </div>
      </div>
      <div className={`${categoryDiv} bg-[#F53D52]`}>
        <div className="w-auto">
          <span className={`${categoryText} hover:text-[#ffc6cb]`} style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/history">History</Link>
          </span>
        </div>
      </div>
      <div className={`${categoryDiv} bg-[#FF9200]`}>
        <div className="w-auto">
          <span className={`${categoryText} hover:text-[#ffe8c9]`} style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/geography">Geography</Link>
          </span>
        </div>
      </div>
      <div className={`${categoryDiv} bg-[#16A085]`}>
        <div className="w-auto">
          <span className={`${categoryText} hover:text-[#b4ffe2]`} style={{ textShadow: `${shadowStyle}` }}>
            <Link to="/sports">Sports</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
 
export default Main;
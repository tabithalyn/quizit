import { CATEGORY, CATEGORY_NAMES, COLOR } from "../api/api";
import Game from "../components/Game";

const GeographyQuiz = () => {
  
  return (
    <div className={`w-screen h-screen overflow-hidden bg-${COLOR.ORANGE} flex flex-wrap justify-center items-center`}>
      <div className="w-4/5 h-4/5 bg-[#f2f6f6] rounded-2xl">
        <div>
          <Game
            category={CATEGORY.GEOGRAPHY}
            color={COLOR.ORANGE}
            categoryName={CATEGORY_NAMES.GEOGRAPHY}
          />
        </div>
      </div>
    </div>
  );
}
 
export default GeographyQuiz;
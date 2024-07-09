import { COLOR, CATEGORY, CATEGORY_NAMES } from "../api/api";
import Game from "../components/Game";

const TvQuiz = () => {
  
  return (
    <div className={`w-screen h-screen overflow-hidden bg-${COLOR.YELLOW} flex flex-wrap justify-center items-center`}>
      <div className="w-4/5 h-4/5 bg-[#f2f6f6] rounded-2xl">
        <div>
          <Game
            category={CATEGORY.TELEVISION}
            color={COLOR.YELLOW}
            categoryName={CATEGORY_NAMES.TELEVISION}
          />
        </div>
      </div>
    </div>
  );
}
 
export default TvQuiz;
import { COLOR, CATEGORY, CATEGORY_NAMES } from "../api/api";
import Game from "../components/Game";

const SportsQuiz = () => {

  return (
    <div className={`w-screen h-screen overflow-hidden bg-${COLOR.GREEN} flex flex-wrap justify-center items-center`}>
      <div className="w-4/5 h-4/5 bg-[#f3f3f3] rounded-2xl">
        <div>
          <Game
            category={CATEGORY.SPORTS}
            color={COLOR.GREEN}
            categoryName={CATEGORY_NAMES.SPORTS}
          />
        </div>
      </div>
    </div>
  );
}
 
export default SportsQuiz;
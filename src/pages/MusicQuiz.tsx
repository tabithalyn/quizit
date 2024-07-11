import { CATEGORY, COLOR, CATEGORY_NAMES } from "../api/api";
import Game from "../components/Game";

const MusicQuiz = () => {

  return (
    <div className={`w-screen h-screen overflow-hidden bg-${COLOR.PURPLE} flex flex-wrap justify-center items-center`}>
      <div className="w-4/5 h-4/5 bg-[#f3f3f3] rounded-2xl">
        <div>
          <Game
            category={CATEGORY.MUSIC}
            color={COLOR.PURPLE}
            categoryName={CATEGORY_NAMES.MUSIC}
          />
        </div>
      </div>
    </div>
  );
}
 
export default MusicQuiz;
import { CATEGORY, COLOR, CATEGORY_NAMES } from "../api/api";
import Game from "../components/Game";

const GeneralQuiz = () => {

  return (
    <div className={`w-screen h-screen overflow-hidden bg-${COLOR.BLUE} flex flex-wrap justify-center items-center`}>
      <div className="w-4/5 h-4/5 bg-[#f3f3f3] rounded-2xl">
        <div>
          <Game
            category={CATEGORY.GENERAL}
            color={COLOR.BLUE}
            categoryName={CATEGORY_NAMES.GENERAL}
          />
        </div>
      </div>
    </div>
  );
}
 
export default GeneralQuiz;
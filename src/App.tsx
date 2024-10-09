import { Route, Routes } from "react-router-dom";
import GeneralQuiz from "./pages/GeneralQuiz";
import TvQuiz from "./pages/TvQuiz";
import HistoryQuiz from "./pages/HistoryQuiz";
import GeographyQuiz from "./pages/GeographyQuiz";
import SportsQuiz from "./pages/SportsQuiz";
import MusicQuiz from "./pages/MusicQuiz";
import Home from "./pages/Home";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/general" element={<GeneralQuiz />}></Route>
        <Route path="/tv" element={<TvQuiz />}></Route>
        <Route path="/history" element={<HistoryQuiz />}></Route>
        <Route path="/geography" element={<GeographyQuiz />}></Route>
        <Route path="/sports" element={<SportsQuiz />}></Route>
        <Route path="/music" element={<MusicQuiz />}></Route>
      </Routes>
    </>
  );
}

export default App;
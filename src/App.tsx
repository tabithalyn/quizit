import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import GeneralQuiz from "./pages/GeneralQuiz";
import TvQuiz from "./pages/TvQuiz";
import HistoryQuiz from "./pages/HistoryQuiz";
import GeographyQuiz from "./pages/GeographyQuiz";
import SportsQuiz from "./pages/SportsQuiz";
import MusicQuiz from "./pages/MusicQuiz";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/general" element={<GeneralQuiz />}></Route>
        <Route path="/tv" element={<TvQuiz />}></Route>
        <Route path="/history" element={<HistoryQuiz />}></Route>
        <Route path="/geography" element={<GeographyQuiz />}></Route>
        <Route path="/sports" element={<SportsQuiz />}></Route>
        <Route path="/music" element={<MusicQuiz />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
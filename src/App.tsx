import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Results from "./pages/Results";
import GeneralQuiz from "./pages/GeneralQuiz";
import TvMoviesQuiz from "./pages/TvMoviesQuiz";
import HistoryQuiz from "./pages/HistoryQuiz";
import GeographyQuiz from "./pages/GeographyQuiz";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/general" element={<GeneralQuiz />}></Route>
        <Route path="/tv-movies" element={<TvMoviesQuiz />}></Route>
        <Route path="/history" element={<HistoryQuiz />}></Route>
        <Route path="/geography" element={<GeographyQuiz />}></Route>
        <Route path="/results" element={<Results />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
// import "../styles/Game.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { AnswerObject, fetchQuestions, QuestionState } from "../api/api";
import Question from "./Question";
import StartScreen from "./StartScreen";
import Result from "./Result";

type GameType = {
  category: string;
  color: string;
  categoryName: string;
}

const Game = ({category, color, categoryName}:GameType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [selected, setSelected] = useState<boolean>(false);
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    const startGame = async () => {
      setLoading(true);
      setGameOver(false);
      setFormSubmitted(false);
      const newQuestions = await fetchQuestions(numQuestions, difficulty, category);
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setLoading(false);
      setSelected(false);
      setNumber(0);
    }
    if (formSubmitted === true) {
      startGame();
    }
  }, [category, difficulty, formSubmitted, loading, numQuestions]);

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev+1);
      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correct_answer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  }

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === numQuestions) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
      setSelected(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
    localStorage.setItem("answers", JSON.stringify(userAnswers));
  }, [questions, userAnswers]);
  
  return (
    <>
    {
    loading ? (
      <div className="flex flex-wrap justify-center items-center w-[%90] h-[90%] z-50">
        <BounceLoader />
      </div>
    ) : gameOver && !showResults ? (
      <div className="w-full flex flex-wrap justify-center">
        <StartScreen
          categoryName={categoryName}
          setChosenDifficulty={setDifficulty}
          setNumQuestions={setNumQuestions}
          color={color}
          setFormSubmitted={setFormSubmitted}
        />
      </div>
    ) : (
      <>
        {
          questions?.length > 0 && !gameOver && !showResults ? (
            <Question
              question={questions[number]?.question}
              answers={questions[number]?.answers}
              callback={checkAnswer}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              questionNum={number + 1}
              totalQuestions={numQuestions}
              correct={questions[number].correct_answer}
              selected={selected}
              setSelected={setSelected}
              color={color}
              selectedCategory={category}
              selectedDifficulty={difficulty}
              score={score}
            />
          ) : null
        }
        {
          userAnswers.length === number + 1 && !showResults ? (
            <div className="flex flex-wrap justify-around p-5 items-center -mt-5">
              {number === numQuestions - 1 ? (
                <button className={`bg-${color} opacity-90 hover:opacity-80 hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl xs:text-sm xs:px-7 sm:px-8 md:px-9 lg:px-10 xl:px-10`}  onClick={() => setShowResults(true)}>
                  Finish <i className="fa-solid fa-flag-checkered"></i>
                </button>
              ) : (
                <>
                <Link to="/">
                  <button className={`bg-${color} opacity-70 hover:opacity-90 hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl xs:text-sm xs:px-7 sm:px-8 md:px-9 lg:px-10 xl:px-10`}>
                    Quit <i className="fa-solid fa-person-running"></i>
                  </button>
                </Link>
                <button className={`bg-${color} opacity-90 hover:opacity-80 hover:cursor-pointer transition-all uppercase py-3 px-10 font-medium tracking-wide text-lg rounded-3xl xs:text-sm xs:px-7 sm:px-8 md:px-9 lg:px-10 xl:px-10`} type="submit" onClick={nextQuestion}>
                  Next <i className="fa-solid fa-right-long"></i>
                </button>
                </>
              )}
            </div>
          ) : showResults ? (
            <Result
              score={score}
              numQuestions={numQuestions}
              setGameOver={setGameOver}
              color={color}
              setShowResults={setShowResults}
            />
          ) : null
        }
      </>
    )}
    </>
  );
}
 
export default Game;
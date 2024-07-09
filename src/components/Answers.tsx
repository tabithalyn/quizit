import { useEffect, useState } from "react";
import { AnswerObject, QuestionState } from "../api/api";
import parse from "html-react-parser";
import Result from "./Result";

type AnswerProps = {
  score: number;
  numQuestions: number;
  setGameOver: (arg0:boolean) => void;
  color: string;
}

const Answers = (props:AnswerProps) => {
  const [quizQuestions, setQuizQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  useEffect(() => {
    const quizQuestions = JSON.parse(localStorage.getItem("questions") || "");
    if (quizQuestions) {
      console.log(quizQuestions);
      setQuizQuestions(quizQuestions);
    }
  }, []);

  useEffect(() => {
    const userAnswers = JSON.parse(localStorage.getItem("answers") || "");
    if (userAnswers) {
      console.log(userAnswers);
      setUserAnswers(userAnswers);
    }
  }, []);

  return (
    <div className="flex flex-wrap absolute justify-center items-center w-screen h-screen top-0 left-0 p-2">
      <div className="bg-[#f2f6f6] w-[80%] h-[60%] flex flex-wrap justify-center items-center border-0 rounded-xl pt-10 overflow-y-auto pb-5">
        <table className="w-[90%] flex justify-center items-start text-sm overflow-y-auto border border-gray-200 rounded-xl">
          <tr className="w-[50%] h-full flex items-start flex-wrap bg-white">
          {quizQuestions.map((q, id) => (
            <td key={id} className="w-full flex items-center flex-wrap h-[70px] p-3 border border-t-gray-200 overflow-y-auto">
              {parse(q.question)}
            </td>
          ))}
          </tr>
          <tr className="w-[50%] h-full flex items-center justify-center flex-wrap bg-white">
          {userAnswers.map((a, id) => (
            <td key={id} className="w-full flex items-center flex-wrap h-[70px] border border-t-gray-200 overflow-y-auto">
              <p className="block m-0 p-1 w-full">Your Answer:{" "}
                <span className={a.answer === a.correct_answer ? "text-emerald-800" : "text-red-800"}>
                  {parse(a.answer)}
                  {a.answer === a.correct_answer ? (
                    <span style={{ marginLeft: "5px" }}>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                  ) : (
                    <span style={{ marginLeft: "5px" }}>
                      <i className="fa-regular fa-circle-xmark"></i>
                    </span>
                  )}
                </span>
              </p>
              <p className="block m-0 p-1 w-full">Correct Answer:{" "}
                <span className="text-emerald-800">
                  {parse(a.correct_answer)}
                </span>
              </p>
            </td>
          ))}
          </tr>
        </table>
      </div>
      <Result
        score={props.score}
        numQuestions={props.numQuestions}
        setGameOver={props.setGameOver}
        color={props.color}
      />
    </div>
  );
}
 
export default Answers;
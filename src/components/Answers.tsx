import { useEffect, useState } from "react";
import { AnswerObject, QuestionState } from "../api/api";
import parse from "html-react-parser";

const Answers = () => {
  const [quizQuestions, setQuizQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  useEffect(() => {
    const quizQuestions = JSON.parse(localStorage.getItem("questions") || "");
    if (quizQuestions) {
      setQuizQuestions(quizQuestions);
    }
  }, []);

  useEffect(() => {
    const userAnswers = JSON.parse(localStorage.getItem("answers") || "");
    if (userAnswers) {
      setUserAnswers(userAnswers);
    }
  }, []);

  return (
    <div className="flex flex-wrap absolute justify-center items-center w-screen h-screen top-0 left-0 p-2">
      <div className="bg-[#f3f3f3] w-[80%] xs:h-[62%] sm:h-[63%] md:h-[63%] lg:h-[60%] xl:h-[60%] flex flex-wrap justify-center items-center border-0 rounded-xl xs:pt-3 sm:pt-1 md:pt-10 lg:pt-10 overflow-y-auto pb-5">
        <table className="xs:w-[97%] sm:w-[96%] md:w-[90%] lg:w-[90%] flex justify-center items-start text-sm overflow-y-auto border border-gray-200 rounded-xl">
          <tbody>
            <tr className="w-full h-full flex items-start flex-wrap bg-white">
            {quizQuestions.map((q, id) => (
              <td key={id} className="w-full flex items-center flex-wrap xs:h-[100px] sm:h-[80px] md:h-[70px] lg:h-[70px] p-2 border border-t-gray-200 overflow-y-auto">
                {parse(q.question)}
              </td>
            ))}
            </tr>
            </tbody>
            <tbody>
            <tr className="w-full h-full flex items-center justify-center flex-wrap bg-white">
            {userAnswers.map((a, id) => (
              <td key={id} className="w-full flex items-center flex-wrap xs:h-[100px] sm:h-[80px] md:h-[70px] lg:h-[70px] border border-t-gray-200 overflow-y-auto">
                <p className="block m-0 p-2 w-full leading-4">You:{" "}
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
                <p className="block m-0 p-1 w-full -mt-1">Correct:{" "}
                  <span className="text-emerald-800">
                    {parse(a.correct_answer)}
                  </span>
                </p>
              </td>
            ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default Answers;
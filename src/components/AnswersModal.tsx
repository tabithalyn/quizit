import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { AnswerObject, QuestionState } from "../api/api";
import parse from "html-react-parser";

const ModalDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 850px;
  height: 80%;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 20px;
  background: #fff;
`
const BackDrop = styled(motion.div)`
  background: #aaaaaa2e;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`

const AnswersModal = ({ isToggled, setToggled, color }:{
  isToggled: boolean;
  setToggled: () => void;
  color: string;
}) => {
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
    <AnimatePresence>
      {isToggled &&
      <>
        <BackDrop />
        <ModalDiv 
          initial={{y: 10, x: "-50%", opacity: 0}}
          animate={{y: 50, opacity: 1}}
          exit={{y: 100, opacity: 0}}
        >
          <table className="flex justify-center items-start text-sm overflow-y-auto border-0 rounded-xl h-[75%] w-full">
            <tbody>
              <tr className="w-full flex items-start flex-wrap bg-white">
              {quizQuestions.map((q, id) => (
                <td key={id} className="w-full flex items-center flex-wrap h-[70px] p-2 border-t border-r overflow-y-auto">
                  {parse(q.question)}
                </td>
              ))}
              </tr>
              </tbody>
              <tbody>
              <tr className="w-full flex items-center justify-center flex-wrap bg-white">
              {userAnswers.map((a, id) => (
                <td key={id} className="w-full flex items-end flex-wrap h-[70px] border-t overflow-y-auto">
                  <p className="block m-1 w-full leading-4">
                    <span className="font-medium">
                      <span className={a.answer === a.correct_answer ? "text-emerald-50 bg-emerald-700 p-1 rounded" : "text-red-50 bg-red-700 p-1 rounded"}>{parse(a.answer)}</span>
                      {a.answer === a.correct_answer ? (
                        <span style={{ marginLeft: "5px" }}>
                          <i className="fa-regular fa-circle-check text-emerald-50 bg-emerald-700 rounded-full"></i>
                        </span>
                      ) : (
                        <span style={{ marginLeft: "5px" }}>
                          <i className="fa-regular fa-circle-xmark text-red-50 bg-red-700 rounded-full"></i>
                        </span>
                      )}
                    </span>
                  </p>
                  <p className="block py-1 pl-2 w-full bg-[#fff]">
                    <span className="opacity-50">Correct Answer</span>
                    <span className="font-extrabold mr-2 ml-0.5">:</span>
                    <span className="text-emerald-700 font-medium">
                      {parse(a.correct_answer)}
                    </span>
                  </p>
                </td>
              ))}
              </tr>
            </tbody>
          </table>
          <button className={`bg-${color} hover:scale-105 hover:cursor-pointer transition-all uppercase py-3 xs:px-6 sm:px-8 md:px-8 lg:px-10 xl:px-10 font-medium tracking-wide text-lg rounded-3xl m-5`} onClick={setToggled}>Close</button>
        </ModalDiv>
      </>
      }
    </AnimatePresence>
  );
}
 
export default AnswersModal;
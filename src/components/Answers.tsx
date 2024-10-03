import { useState } from "react";
import AnswersModal from "./AnswersModal";

const Answers = ({ props }: {
  props: { color: string; }
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(prevState => !prevState);
  };

  return (
    <div className="bg-[#f3f3f3] border-0 rounded-xl overflow-y-auto pb-5 flex justify-center items-start col-span-4 row-span-2">
      <button className={`bg-${props.color} hover:scale-105 hover:cursor-pointer transition-all uppercase py-3 xs:px-6 sm:px-8 md:px-8 lg:px-10 xl:px-10 font-medium tracking-wide text-lg rounded-3xl`} onClick={openModal}>
        View Answers
      </button>
      <AnswersModal
        isToggled={modalVisible}
        setToggled={openModal}
        color={props.color}
      />
    </div>
  );
}
 
export default Answers;
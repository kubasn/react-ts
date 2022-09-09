import React, { useRef } from "react";
import { ToDo } from "../models/ToDo";
import { GrAdd } from "react-icons/gr";

//ref - object which we can store in a constant, and name it textRef actually

interface newToDoProps {
  onGet: (item: ToDo) => void;
}

// type newToDoProps {
//   getHandler: Function;
// }

const NewToDo: React.FC<newToDoProps> = (props) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFunction = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current!.value;
    const enteredText = textInputRef.current!.value;
    props.onGet({ title: enteredTitle, text: enteredText });
  };

  return (
    <div>
      <form
        onSubmit={submitFunction}
        className="flex flex-col  items-center w-3/4 md:w-1/2 mx-auto px-2 font-roboto text-gray-100 font-semibold 
 py-2   border-[1px] bg-white rounded-md	 "
      >
        <div className="flex flex-col pb-3 text-left ">
          <div className="flex flex-col mb-2">
            <label
              className="ml-0  w-[300px] 2xl:w-[800px] text-gray-900 "
              htmlFor="title"
            >
              Tytuł
            </label>
            <input
              className="w-[300px] 2xl:w-[800px] border-[1px] border-gray-200  px-1 rounded-sm"
              type="text"
              id="title"
              ref={titleInputRef}
              placeholder="wprowadź tytuł"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label
              className="w-[300px] 2xl:w-[800px] text-gray-900 font-bold "
              htmlFor="desc"
            >
              Treść
            </label>
            <textarea
              className="w-[300px] 2xl:w-[800px] border-[1px] border-gray-200  px-1 rounded-sm"
              id="text"
              placeholder="treść"
              ref={textInputRef}
            />
          </div>
        </div>
        <button
          className="w-[50px] relative 2xl:w-[70px] 2xl:h-[70px] h-[50px] bg-green-500 hover:bg-green-700 rounded-full text-gray-800 font-semibold "
          type="submit"
        >
          <GrAdd className="absolute text-white w-[20px] h-[20px] top-[15px] left-[15px]" />
        </button>
      </form>
    </div>
  );
};

export default NewToDo;

import React, { useRef } from "react";
import { ToDo } from "../models/ToDo";

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
        className="flex flex-col items-center w-3/4 md:w-1/2 mx-auto px-2 font-roboto text-gray-100 font-semibold 
 py-2   border-[1px] border-gray-200 rounded-md	 "
      >
        <div className="flex flex-col pb-3 items-start">
          <label className="  w-[300px] 2xl:w-[800px] " htmlFor="title">
            Tytuł
          </label>
          <input
            className="w-[300px] 2xl:w-[800px]  px-1 rounded-sm"
            type="text"
            id="title"
            ref={titleInputRef}
            placeholder="wprowadź tytuł"
          />
          <label className="w-[300px] 2xl:w-[800px] " htmlFor="desc">
            Treść
          </label>
          <textarea
            className="w-[300px] 2xl:w-[800px]  px-1 rounded-sm"
            id="text"
            placeholder="treść"
            ref={textInputRef}
          />
        </div>
        <button
          className="w-[100px] 2xl:w-[200px] h-[40px] bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 font-semibold "
          type="submit"
        >
          Zapisz
        </button>
      </form>
    </div>
  );
};

export default NewToDo;

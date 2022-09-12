import React, { useState } from "react";
import { ToDo } from "../models/ToDo";
import { MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { EventEmitter } from "stream";

interface ToDoItemProps {
  item: ToDo;
  deleteHandler(id: number): void;
}

const ToDoItem: React.FC<ToDoItemProps> = (props) => {
  const [show, setShow] = useState<boolean>(false);
  const showMore = (event: React.MouseEvent) => {
    event.preventDefault();
    setShow(!show);
    console.log(show);
  };

  // const deleteHandler = (event: React.MouseEvent) => {
  //   event.preventDefault();
  //   props.deleteHandler(props.item.id);
  // };

  return (
    <li className="border-[1px] py-1 border-gray-100 bg-gray-50 ">
      <div className="flex justify-between">
        <h2 className="text-gray-600 ml-1">{props.item.title}</h2>
        <div className=" mr-1">
          <button
            onClick={showMore}
            className="bg-blue-500 rotate-180 w-[30px] h-[30px] rounded-full hover:bg-blue-600 text-white mr-1 relative"
          >
            <MdOutlineExpandMore className="absolute top-[5px] left-[5px] w-[20px] h-[20px]" />
          </button>
          <button
            //null because we dont care about "this"
            onClick={props.deleteHandler.bind(null, props.item.id)}
            className="bg-red-600 w-[30px] h-[30px] rounded-full hover:bg-red-700 text-white relative "
          >
            <AiOutlineDelete className="absolute top-[5px] left-[5px] w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
      {show && (
        <div>
          <p className="text-left p-2">{props.item.text}</p>
        </div>
      )}
    </li>
  );
};

export default ToDoItem;

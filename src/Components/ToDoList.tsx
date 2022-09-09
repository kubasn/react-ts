import React, { useState } from "react";
import { ToDo } from "../models/ToDo";
import { MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { EventEmitter } from "stream";
import ToDoItem from "./ToDoItem";

interface ToDoListProps {
  items: ToDo[];
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return (
    <ul className="mt-10 w-1/2 2xl:w-3/4 mx-auto bg-white">
      {props.items.map((item, key) => (
        <ToDoItem item={item} />
      ))}
    </ul>
  );
};

export default ToDoList;

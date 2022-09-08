import React from "react";
import { ToDo } from "../models/ToDo";

interface ToDoListProps {
  items: ToDo[];
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item, key) => (
        <li key={key}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;

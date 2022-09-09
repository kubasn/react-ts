import React, { useState } from "react";
import "./App.css";
import NewToDo from "./Components/NewToDo";
import ToDoList from "./Components/ToDoList";
import { ToDo } from "./models/ToDo";

const App: React.FC = () => {
  const [todoes, setTodoes] = useState<ToDo[]>([]);
  //tak też może być
  //const [todoes,setTodoes] = useState<{title:string}[]>([])
  const backend = [{ id: "1", text: "Do some shopping" }];

  const getHandler = (item: ToDo) => {
    console.log(item);
    // let newTodoes = todoes;
    // newTodoes.push(item);
    // setTodoes(newTodoes);
    //albo tak prevState->lateast state
    setTodoes((prevState) => [...prevState, item]);
  };

  //pass pointer
  return (
    <div className="App bg-gradient-to-tl from-gray-900 to-gray-600 bg-gradient-to-r w-full h-full min-h-[100vh] py-12">
      <NewToDo onGet={getHandler} />
      <ToDoList items={todoes} />
    </div>
  );
};

export default App;

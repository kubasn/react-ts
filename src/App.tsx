import React, { useState } from "react";
import "./App.css";
import NewToDo from "./Components/NewToDo";
import ToDoList from "./Components/ToDoList";
import { ToDo } from "./models/ToDo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  //tak też może być
  //const [todoes,setTodoes] = useState<{title:string}[]>([])
  const backend = [{ id: "1", text: "Do some shopping" }];

  const getHandler = (item: ToDo) => {
    console.log(item);
    // let newTodoes = todoes;
    // newTodoes.push(item);
    // setTodoes(newTodoes);
    //albo tak prevState->lateast state
    setTodos((prevState) => [...prevState, item]);
  };

  const deleteHandler = (id: number) => {
    console.log(id);
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  //pass pointer
  return (
    <div className="App bg-gradient-to-tl from-gray-900 to-gray-600 bg-gradient-to-r w-full h-full min-h-[100vh] py-12">
      <NewToDo onGet={getHandler} />
      <ToDoList deleteHandler={deleteHandler} items={todos} />
    </div>
  );
};

export default App;

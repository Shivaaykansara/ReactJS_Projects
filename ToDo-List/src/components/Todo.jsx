/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoDate } from "./TodoDate";
import { TodoList } from "./TodoList";
import { getLocalStorage, setLocalStorage } from "./TodoLocalStorage";


export const Todo = () => {
 
  const [task, setTask] = useState(()=>getLocalStorage());
  const [inputValue,setInputValue] = useState([]);

  const handleSubmitForm = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
    setInputValue("")
    
  };

  setLocalStorage(task)

  const handleDeleteTask = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) =>{
    const updatedTask = task.map((curTask)=>{
        if (curTask.content === content){
            return{...curTask, checked: !curTask.checked}
        }
        else{
            return curTask;
        }
    })
    setTask(updatedTask)
  }

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleSubmitForm} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curElem) => {
            return (
              <TodoList
                key={curElem.id}
                data={curElem.content}
                checked = {curElem.checked}
                onHandleDeleteTodo={handleDeleteTask}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};

/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";

import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoDate } from "./TodoDate";
import { TodoList } from "./TodoList";
import { getLocalStorage, setLocalStorage } from "./TodoLocalStorage";
import { BioContext } from "..";

export const Todo = () => {
  
  const {inputValue,setInputValue,task, setTask,setEditFlag} = useContext(BioContext);

  const handleSubmitForm = ({ id, content, checked}) => {
    
    if (!content) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked}]);
    setInputValue("");
  };

  const handleEditForm = ({id,content})=>{
    console.log(id,content)
    const updatedTask = task.map((curTask)=>{
      if(curTask.id === id){
        console.log(curTask.content)
        curTask.content = content
      }
      return curTask
    })
    setTask(updatedTask)
    setInputValue("")
  }

  setLocalStorage(task);

  const handleDeleteTask = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleEditTodo = (value,id)=>{
    setInputValue((prev)=>({...prev,id:id,content:value}))
    setEditFlag(true)
  }

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleSubmitForm} onEditTodo={handleEditForm}/>
      <section className="myUnOrdList">
        <ul>
          {task.map((curElem) => {
            return (
              <TodoList
                key={curElem.id}
                id={curElem.id}
                data={curElem.content}
                checked={curElem.checked}
                onHandleDeleteTodo={handleDeleteTask}
                onHandleCheckedTodo={handleCheckedTodo}
                onHandleEditTodo={handleEditTodo}
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
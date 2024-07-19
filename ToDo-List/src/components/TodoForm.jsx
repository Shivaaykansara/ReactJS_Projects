/* eslint-disable react/prop-types */
import { useState } from "react";


export const TodoForm = ({onAddTodo})=>{
    const [inputValue,setInputValue] = useState({});
    const handleInputValue = (value) =>{
        setInputValue({id:value, content:value, checked:false});
    }
    const handleSubmitForm = (e)=>{
        e.preventDefault()
        onAddTodo(inputValue);
        setInputValue({id:"", content:"", checked:false});
    }
    return (
        <section className="form">
            <form onSubmit={handleSubmitForm}>
                <div>
                    <input type="text"  className="placeholder-black todo-input text-black" autoComplete="off" value={inputValue.content}  onChange={(event)=>handleInputValue(event.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="todo-btn" >
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    )
}
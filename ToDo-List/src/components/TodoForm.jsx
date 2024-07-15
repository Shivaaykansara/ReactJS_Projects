/* eslint-disable react/prop-types */
import { useState } from "react";


export const TodoForm = ({onAddTodo,editValue,editFlag})=>{
    const [inputValue,setInputValue] = useState({});
    // const [editableValue,setEditableValue] = useState(editValue);
    const handleInputValue = (value) =>{
        setInputValue({id:value, content:value, checked:false, edit:editFlag});
    }
    
    const handleSubmitForm = (e)=>{
        e.preventDefault()
        onAddTodo(inputValue,editFlag)
        setInputValue({id:"", content:"", checked:false});
    }
    return (
        <section className="form">
            <form onSubmit={handleSubmitForm}>
                <div>
                    <input type="text" className="todo-input text-black" autoComplete="off" defaultValue={editFlag?editValue:""}  onChange={(event)=>handleInputValue(event.target.value)}/>
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
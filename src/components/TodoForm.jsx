/* eslint-disable react/prop-types */
import { useContext} from "react";
import { BioContext } from "..";


export const TodoForm = ({onAddTodo,onEditTodo})=>{
    const {inputValue,setInputValue,editFlag} = useContext(BioContext);
    const handleInputValue = (value) =>{
      let id = new Date().getTime()
        editFlag?setInputValue((prev)=>({...prev,content:value})):setInputValue({id:id, content:value, checked:false});
    }
    const handleSubmitForm = (e)=>{
              e.preventDefault()
        onAddTodo(inputValue);
        setInputValue({id:"", content:"", checked:false});
    }

    const handleEditForm = (e) =>{
      e.preventDefault()
      onEditTodo(inputValue)
      setInputValue({id:"", content:"", checked:false});
    }
    return (
        <section className="form">
            <form onSubmit={editFlag?handleEditForm:handleSubmitForm}>
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
import { createContext, useState } from "react";
import { getLocalStorage } from "./components/TodoLocalStorage";

export const BioContext = createContext()

export const BioProvider = ({children})=>{

    const [task, setTask] = useState(() => getLocalStorage());
    const [inputValue, setInputValue] = useState([]);
    const [changeId,setChangeId] = useState('')
    const [editFlag,setEditFlag] = useState(false)
    return <BioContext.Provider value={{inputValue,setInputValue,editFlag,setEditFlag,task,setTask,changeId,setChangeId}}>
        {children}
    </BioContext.Provider>
}
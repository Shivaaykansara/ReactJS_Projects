const todoKey = 'Tasks'

export const getLocalStorage = () =>{
    const rawTodo  = localStorage.getItem(todoKey);
    if(!rawTodo) return[];
    return JSON.parse(rawTodo)
}

export const setLocalStorage = (data)=>{
    return localStorage.setItem(todoKey,JSON.stringify(data))
}
/* eslint-disable react/prop-types */

import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data,checked,onHandleCheckedTodo,onHandleDeleteTodo}) => {
 
  return (
    <li className="todo-item">
      <span className={checked ? 'checkList' : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

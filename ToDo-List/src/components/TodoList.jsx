/* eslint-disable react/prop-types */

import { MdCheck, MdDeleteForever,MdModeEdit  } from "react-icons/md";

export const TodoList = ({data,checked,onHandleEditTodo,onHandleCheckedTodo,onHandleDeleteTodo}) => {
 
  return (
    <li className="todo-item">
      <span className={checked ? 'checkList' : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
      <button className="edit-btn" onClick={() => onHandleEditTodo(data)}>
        <MdModeEdit />
      </button>
    </li>
  );
};

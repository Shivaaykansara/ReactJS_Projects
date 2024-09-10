/* eslint-disable react/prop-types */

import { MdCheck, MdDeleteForever, MdEdit  } from "react-icons/md";

export const TodoList = ({id,data,checked,onHandleCheckedTodo,onHandleDeleteTodo,onHandleEditTodo}) => {
  return (
    <li className="todo-item" key={id}>
      <span className={checked ? 'checkList' : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
      <button className="delete-btn" onClick={() => onHandleEditTodo(data,id)}>
        <MdEdit />
      </button>
    </li>
  );
};
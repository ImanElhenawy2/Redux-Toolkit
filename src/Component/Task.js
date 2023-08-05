import React from "react";
import { useDispatch } from "react-redux";
import {checkTodo} from "../Slice"

function Task({id, description, isDone}) {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(checkTodo({
            id: id, isDone: !isDone
        }));
    };
    
    
    return (
      <li className= "list-group-item" >
        <div className="d-flex justify-content-between">
            <span className="d-flex align-items-center">
                 <input
		             type='checkbox'
		             className='mr-3'
		             checked= {isDone}
                 onChange={handleCheckboxClick}/>		     
            {description}                 
            </span>
        </div>
      </li>
        );
    }  
  
  export default Task;
  
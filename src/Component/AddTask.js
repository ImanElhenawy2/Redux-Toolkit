import React, { useState } from "react";
import ListTask from './ListTask';
import { useDispatch } from "react-redux";
import { addTodo} from "../Slice";



function AddTask() {
    const [task , setTask] = useState([]);
    const [value , setValue] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e) => {
     e.preventDefault()
      setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo({ description: value }))
        setTask((prev) => [...prev , value]);
      setValue ("");  
    };
    return (
    <div >
        <form className="form-inline mt-3 mb-3">
          <input 
           className="form-control mb-3 mr-sm-2"
           value = {value} 
           onChange = {handleChange}
          />
          <button type= "submit" className="btn btn-primary mb-2 " onClick={handleSubmit}>
            Add
          </button>
        </form>
    
          <ListTask task = {task} />
    </div>
    );
  }
  
  export default AddTask;
  
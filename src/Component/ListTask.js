import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Task from "./Task";

function ListTask() {

    const todos = useSelector((state) => state.todos.tasks);



    return (     
        <ul className="list-group">
            { todos.length ?
            (todos.map((todo) => <Task id= {todo.id} description={todo.description} isDone={todo.isDone} />))
            : (
             <p>The list is empty</p>
            ) }
        </ul>    
        );
  }
  
  export default ListTask;
  
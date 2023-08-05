import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
    name: "todos",
    initialState:{
    tasks:[],
    filter:[]
    },
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: uuidv4(),
                description: action.payload.description,
                isDone: false,
            };
            console.log(newTodo)
            state.tasks.push(newTodo);
        },
        checkTodo: (state, action) => {
            const index = state.tasks.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state.tasks[index].isDone = action.payload.isDone;}
    }
});

export const {addTodo, checkTodo} = todoSlice.actions;

export default todoSlice.reducer;
//  deleteTodo: (state, action) => {
  //      return state.filter((todo) => todo.id !== action.payload.id)
  //  }
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    allTodos: [{
        id: 1,
        text: "I am the First"
    }]
}

export const todoSlice = createSlice({
    name: "todo",                 // Name is bydefault Key of Redux-toolkit
    initialState,
    reducers: {                   // All functionality written here 
        addTodo : (state, action) => {      // This function accept two arguments (state, action)
            const todo ={  
                id: nanoid(),
                text: action.payload        // Payload is same as req.body.text. it accept many properties
            }
            state.allTodos.push(todo)    // Array has Push methode
        }, 
        deleteTodo : (state, action) =>{
             state.allTodos = state.allTodos.filter((t) => t.id !== action.payload)      // we can overwrite allTodos properties
        }
    }
})


// This is export individual function so we can use indivisually
export const {addTodo, deleteTodo} = todoSlice.actions


// This is for import into store.js
export default todoSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push({
                completed: false,
                text: action.payload
            })
        },
        removeTodo: (state, action) => {
            state.splice(action.payload, 1)
        },
        deleteAll: (state) => {
            state.splice(0, state.length)
        },
        completedTodo: (state, action) => {
            state[action.payload].completed = !state[action.payload].completed
        }
    }
})

export const { addTodo, removeTodo, deleteAll, completedTodo } = todoSlice.actions
export default todoSlice.reducer
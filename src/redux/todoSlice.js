import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    //dummy data
    initialState: [
        { id: 1, title: 'Debug your code', completed: false },
        { id: 2, title: 'Find the bug', completed: false },
    ],
    //responds to the action, takes the current state, handles the action similar to database tables
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },
       
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});


export const { addTodo,  deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
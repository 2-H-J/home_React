import { createSlice } from "@reduxjs/toolkit";

const makeTodo = () => {
    const todo = [];
    for (let i = 1; i <= 5; i++) {
        todo.push({ id: i, text: `${i}번째 할일`, done: false });
    }
    return todo;
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: { list: makeTodo(), id: 6 },
    reducers: {
        delete: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
        },
        update: (state, action) => {
            state.list = state.list.map((todo) =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        },
        insert: (state, action) => {
            state.list = state.list.concat({
                id: state.id + 1,
                text: action.payload,
                done: false,
            });
            state.id = state.id + 1;
        },
    },
})
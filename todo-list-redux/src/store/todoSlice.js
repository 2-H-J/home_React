import { createSlice } from '@reduxjs/toolkit';
const makeTodo = () => {
  const todo = [];
  for (let i = 1; i <= 5; i++) {
      todo.push({id: i, text: `${i}번째 할일`, done: false});
  }
  return todo;
};

export const todoSlice = createSlice({
  name : 'todo',
  initialState:{
    todoList:makeTodo(),
    count : 6
  },
  reducers : {
    addTodo : (state, action) => {
      state.todoList = state.todoList.concat({id: state.count++, text: action.payload, done: false});
      // state.todoList = [...state.todoList, {id: state.count++, text: action.payload, done: false}];
    },
    deleteTodo : (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
    updateTodo : (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return {...todo, done: !todo.done};
        }
        return todo;
      });
    }
  }
});

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
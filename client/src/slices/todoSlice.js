import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    updatetodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload.todoId
          ? { ...todo, title: action.payload.text }
          : todo
      );
    },
    setTodoStatus: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
  },
});

export const { setTodo, deleteTodo, setTodoStatus, updatetodo } =
  todoSlice.actions;
export default todoSlice.reducer;

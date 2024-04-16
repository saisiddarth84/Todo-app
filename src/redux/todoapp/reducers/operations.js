import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("todos")) || [],
};

export const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    deleteAll: (state, action) => {
      state.items = [];
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    handleEditSubmit: (state, action) => {
      const data = action.payload;
      const index = state.items.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        state.items[index] = { ...data };
        localStorage.setItem("todos", JSON.stringify(state.items));
      }
    },
    handleCheckbox: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        state.items[index].completed = !state.items[index].completed;
        localStorage.setItem("todos", JSON.stringify(state.items));
      }
    },
  },
});

export const {
  addTodo,
  deleteAll,
  removeTodo,
  handleEditSubmit,
  handleCheckbox,
} = operationsSlice.actions;

export default operationsSlice.reducer;

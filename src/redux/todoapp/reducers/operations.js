import { createSlice } from "@reduxjs/toolkit";

export const operationsSlice = createSlice({
  name: "operations",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteAll: (state, action) => {
      return { items: [] };
    },
    removeTodo: (state, action) => {
      const filteredTodos = state.items.filter(
        (todo) => todo.id !== action.payload
      );
      return { items: filteredTodos };
    },
    handleEditSubmit: (state, action) => {
      const data = action.payload;
      const updatedItems = state.items.map((item) => {
        if (item.id === data.id) {
          return {
            id: data.id,
            todo: data.todo,
            completed: data.completed,
          };
        }
        return item;
      });

      return {
        items: updatedItems,
      };
    },
    handleCheckbox: (state, action) => {
      const itemId = action.payload;
      const updatedItems = state.items.map((item) => {
        if (item.id === itemId) {
          return {
            id: item.id,
            todo: item.todo,
            completed: !item.completed,
          };
        }
        return item;
      });

      return {
        items: updatedItems,
      };
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

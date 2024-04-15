import { createSlice } from "@reduxjs/toolkit";


export const operationsSlice = createSlice({
  name: "operations",
  initialState : {
    items: [ 
      { id: 1, todo: "Buy Laptop", completed: false },
      { id: 2, todo: "Master Redux", completed: false },
      { id: 3, todo: "Watering Plants", completed: true },
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload)
    },
    deleteAll: (state,action) => {
      return {items: []}
    },
    removeTodo: (state, action) => {
      const filteredTodos = state.items.filter((todo) => todo.id!==action.payload);
      return {items: filteredTodos}
    }
    
  },
});
export const {addTodo, deleteAll, removeTodo} = operationsSlice.actions;

export default operationsSlice.reducer;
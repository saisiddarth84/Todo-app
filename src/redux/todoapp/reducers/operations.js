import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, todo: "Buy Laptop", completed: false },
  { id: 2, todo: "Master Redux", completed: false },
  { id: 3, todo: "Watering Plants", completed: true },
];

export const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {},
});

export default operationsSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Slice/todoSlice"

export const store = configureStore({
    reducer: todoReducer
});
import { configureStore } from "@reduxjs/toolkit";
import reducer from './slices/filterSlice';
// main store
export const store = configureStore({
    reducer: {
        filter : reducer
    }
});

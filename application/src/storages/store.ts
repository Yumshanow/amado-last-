import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Product/productSlice.ts";

export const store = configureStore({
    reducer: {
        products: productSlice,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

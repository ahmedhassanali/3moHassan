import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./slices/CategoriesSlice";
import ProductsSlice from "./slices/ProductsSlice";

export const store = configureStore({
    reducer: {
        categories : CategoriesSlice,
        products: ProductsSlice,
    },
})
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../../data/ProductsData'
export const fetchProducts = createAsyncThunk(
    "ProductsSlice/fetchProducts",
    async () => {
        // const res = await fetch("http://127.0.0.1:8000/api/Products");
        // const data = await res.json();
        return data;
    }
);

const ProductsSlice = createSlice({
    initialState: [],
    name: "ProductsSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
        })
    }
})

// export const {} = ProductsSlice.actions;
export default ProductsSlice.reducer;

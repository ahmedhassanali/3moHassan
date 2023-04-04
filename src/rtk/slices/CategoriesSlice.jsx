import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../../data/CategoryData'
export const fetchCategories = createAsyncThunk(
    "categoriesSlice/fetchCategories",
    async () => {
        // const res = await fetch("http://127.0.0.1:8000/api/categories");
        // const data = await res.json();
        return data;
    }
);

const CategoriesSlice = createSlice({
    initialState: [],
    name: "categoriesSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
        return action.payload;
        })
    }
})

export default CategoriesSlice.reducer;

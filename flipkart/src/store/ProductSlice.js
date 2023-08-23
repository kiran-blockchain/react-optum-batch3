import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { services } from "../services"
import { GET_ALL_PRODUCTS } from "../constants";

const initialState = {
    "total": 0,
    "skip": 0,
    "limit": 0,
    "products": [],
    "error": "",
    "status": "Inprogress",
    "isLoading": "false"
}

export const fetchProducts = createAsyncThunk("/products/fetchProducts", async (url) => {
    let data = await services.getApi(url);
    return data;
});
const ProductSlice = createSlice({
    initialState: initialState,
    name: 'products',
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.status = "InProgress";
        })
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = "";
                state.products=action.payload.products;
                state.limit= action.payload.limit;
                state.total= action.payload.total; 
            })
            builder.addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = "Error in Fetching the data";
                //state = { ...state, ...action.payload }
            })
    }
});
export default ProductSlice.reducer

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export type ProductDataType = {
    id: number;
    title: string;
    type: string;
    imageUrl: string;
    price: number;
    colors: Array<string>;
    quantity: number;
};


type ProductsState = {
    data: ProductDataType[];
    status: "idle" | "loading" | "error" | "success";
    error: string | null;
};


const initialState: ProductsState = {
    data: [],
    status: "idle",
    error: null,
};


export const getAllProducts = createAsyncThunk<ProductDataType[], void, { rejectValue: string }>(
    "get/getAllProducts",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios("http://localhost:8080/products");

            if (res.status !== 200) {
                throw new Error("Ошибка при получении продуктов");
            }

            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);


const products = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getAllProducts.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = "error";
                state.error = action.payload || "Ошибка загрузки";
            })
            .addCase(getAllProducts.fulfilled, (state, action: PayloadAction<ProductDataType[]>) => {
                state.status = "success";
                state.data = action.payload;
            });
    },
});

export default products.reducer;

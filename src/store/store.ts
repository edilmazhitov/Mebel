import { configureStore } from "@reduxjs/toolkit";
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import products from "./reducers/products"

const rememberedKeys: Array<string> = ["products"];

export const store = configureStore({
    reducer: rememberReducer({
        products
    }),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
});
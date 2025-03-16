import { configureStore } from "@reduxjs/toolkit";
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import products from "./reducers/products";
import user from "./reducers/user";

const rememberedKeys: Array<string> = ["products", "user"];

export const store = configureStore({
    reducer: rememberReducer({
        products,
        user
    }),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
});
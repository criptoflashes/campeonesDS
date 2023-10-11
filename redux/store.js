/* import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { productsApi } from "./services/productApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
  reducer: { 
    counterReducer,
    [productsApi.reducerPath]: productsApi.reducer
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat([productsApi.middleware])
});


setupListeners(store.dispatch) */
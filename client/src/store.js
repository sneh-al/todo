import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import listReducer from "./slices/listSlice";
import uiReducer from "./slices/uiSlice";
import todoReducer from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    lists: listReducer,
    ui: uiReducer,
    todo: todoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;

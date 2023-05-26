import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux-auth";
import postReducer from "./redux-posts";
const store = configureStore({
  reducer: { auth: authReducer, post: postReducer },
});

export default store;

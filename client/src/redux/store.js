import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice.js";
import loadersReducer from "./loadersSlicer.js"; 

const store = configureStore({
  reducer: {
    users: usersReducer,
    loaders: loadersReducer,
  },
});

export default store;
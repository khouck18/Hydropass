import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const reduxStore = configureStore({
  reducer: {},
  middleware: [thunk]
});

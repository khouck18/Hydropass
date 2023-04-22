import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { hostSlice } from "../Screens/Host/HostSlice";

export const reduxStore = configureStore({
  reducer: {
    host: hostSlice.reducer
  },
  middleware: [thunk]
});

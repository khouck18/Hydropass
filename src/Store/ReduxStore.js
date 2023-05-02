import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { hostSlice } from "../Screens/Host/HostSlice";
import {individualListingSlice} from "../Screens/IndividualListing/IndividualListingSlice";

export const reduxStore = configureStore({
  reducer: {
    host: hostSlice.reducer,
    individualListing: individualListingSlice.reducer
  },
  middleware: [thunk]
});

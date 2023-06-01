import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { hostSlice } from "../Screens/Host/HostSlice";
import {individualListingSlice} from "../Screens/IndividualListing/IndividualListingSlice";
import {explorePageSlice} from "../Screens/Explore/ExplorePageSlice";
import { customerSlice } from "../Screens/Customer/CustomerSlice";

export const reduxStore = configureStore({
  reducer: {
    host: hostSlice.reducer,
    individualListing: individualListingSlice.reducer,
    explorePage: explorePageSlice.reducer,
    customer: customerSlice.reducer,
  },
  middleware: [thunk]
});

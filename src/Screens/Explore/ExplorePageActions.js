import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGET } from "../../Utils/axiosRequests";
import { individualListingActions } from "../IndividualListing/IndividualListingSlice";

export const GetListings = createAsyncThunk(
  "explore/GetListings",
  async ({ apiBaseUrl, auth }) => {
    try {
      const response = await ApiGET(`${apiBaseUrl}/listings`, auth);
      return response;
    } catch (err) {
      return err;
    }
  }
);

export const updateListingInformation = createAsyncThunk(
  "explore/updateListingInformation",
  async (listingInfo, thunkAPI) => {
    try {
      const response = await thunkAPI.dispatch(
        individualListingActions.updateListingInformation(listingInfo)
      );
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

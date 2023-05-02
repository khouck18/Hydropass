import { createSlice } from "@reduxjs/toolkit";
import { PostNewHost, PostNewListing } from "./HostActions";

const initialState = {
  hostInformation: {
    firstName: "",
    lastName: "",
    streetAddress: "",
    cityAddress: "",
    zipCodeAddress: ""
  },
  createListingInformation: {
    listingId: "",
    listingImages: [],
    propertyName: "",
    propertyAddress: "",
    dailyRate: 0,
    propertyDescription: "",
    propertyRules: "",
    selectedActivities: [],
    maximumGuests: 0,
    featuredListing: false
  },
  loading: false,
  error: null
};

export const hostSlice = createSlice({
  name: "host",
  initialState,
  reducers: {
    updateHostInformation: (state, action) => {
      const { fieldName, value } = action.payload;
      return {
        ...state,
        hostInformation: {
          ...state.hostInformation,
          [fieldName]: value
        }
      };
    },
    updateCreateListingInformation: (state, action) => {
      const { fieldName, value } = action.payload;
      return {
        ...state,
        createListingInformation: {
          ...state.createListingInformation,
          [fieldName]: Array.isArray(value) ? [...value] : value
        }
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(PostNewHost.pending, (state) => {
        state.loading = true;
      })
      .addCase(PostNewHost.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(PostNewHost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    builder
      .addCase(PostNewListing.pending, (state) => {
        state.loading = true;
      })
      .addCase(PostNewListing.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(PostNewListing.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  }
});

export const hostActions = hostSlice.actions;

export default hostSlice;

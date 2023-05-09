import { createSlice } from "@reduxjs/toolkit";
import { GetIndividualListing } from "./IndividualListingActions";

const initialState = {
    listingInformation: {
        dailyRate: "",
        images: [],
        maximumGuests: "",
        location: "",
        description: "",
        propertyName: "",
        rules: "",
        activities: [],
        rating: "",
        reviews: []
    },
    loading: false,
    error: null
};

export const individualListingSlice = createSlice({
    name: "individualListing",
    initialState,
    reducers: {
        updateListingInformation: (state, action) => {
            state.listingInformation = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetIndividualListing.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetIndividualListing.fulfilled, (state, action) => {
                state.listingInformation = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(GetIndividualListing.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});


export const individualListingActions = individualListingSlice.actions;

export default individualListingSlice;


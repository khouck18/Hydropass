import { createSlice } from "@reduxjs/toolkit";
// import { PostNewHost, PostNewListing } from "./HostActions";

const initialState = {
    listingInformation: {
        dailyRate: "",
        listingImages: [],
        maximumGuests: "",
        propertyAddress: "",
        propertyDescription: "",
        propertyName: "",
        propertyRules: "",
        selectedActivities: [],
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
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(PostNewHost.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(PostNewHost.fulfilled, (state) => {
    //             state.loading = false;
    //             state.error = null;
    //         })
    //         .addCase(PostNewHost.rejected, (state, action) => {
    //             state.error = action.error.message;
    //             state.loading = false;
    //         });
    //     builder
    //         .addCase(PostNewListing.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(PostNewListing.fulfilled, (state) => {
    //             state.loading = false;
    //             state.error = null;
    //         })
    //         .addCase(PostNewListing.rejected, (state, action) => {
    //             state.error = action.error.message;
    //             state.loading = false;
    //         });
    // }
});


export const individualListingActions = individualListingSlice.actions;

export default individualListingSlice;


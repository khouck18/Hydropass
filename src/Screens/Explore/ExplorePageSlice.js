import { createSlice } from "@reduxjs/toolkit";
import { GetListings } from "./ExplorePageActions";
// import { PostNewHost, PostNewListing } from "./HostActions";

const initialState = {
    allListingsInfo: [
        {
            images: [],
            location: "",
            dailyRate: "",
            rating: "",
            name: "",
            featuredListing: false,
        }
    ],
    loading: false,
    error: null
};

export const explorePageSlice = createSlice({
    name: "explorePage",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetListings.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetListings.fulfilled, (state, action) => {
                state.allListingsInfo = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(GetListings.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});


export const explorePageActions = explorePageSlice.actions;

export default explorePageSlice;


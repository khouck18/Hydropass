import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGET } from "../../Utils/axiosRequests";

export const GetIndividualListing = createAsyncThunk("individualListing/GetIndividualListing", async ({apiBaseUrl, auth, listingID}) => {
    try {
        const response = await ApiGET(`${apiBaseUrl}/listings/${listingID}`, auth);
        return response;
    } catch (err) {
        return err;
    }
});
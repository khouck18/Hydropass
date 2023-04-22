import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiPOST } from "../../Utils/axiosRequests";

export const PostNewHost = createAsyncThunk("host/PostNewHost", async ({apiBaseUrl, auth, hostAccountInformation}) => {
    try {
        const response = await ApiPOST(`${apiBaseUrl}/users`, auth, hostAccountInformation);
        return response;
    } catch (err) {
        return err;
    }
});

export const PostNewListing = createAsyncThunk("host/PostNewListing", async ({apiBaseUrl, auth, createListingInformation}) => {
    try {
        const response = await ApiPOST(`${apiBaseUrl}/listings`, auth, createListingInformation);
        return response;
    } catch (err) {
        return err;
    }
});

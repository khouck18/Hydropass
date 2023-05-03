import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGET } from "../../Utils/axiosRequests";

export const GetListings = createAsyncThunk("explore/GetListings", async ({apiBaseUrl, auth}) => {
    try {
        const response = await ApiGET(`${apiBaseUrl}/listings`, auth);
        return response;
    } catch (err) {
        return err;
    }
});

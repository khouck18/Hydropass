import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGET } from "../../Utils/axiosRequests";

export const GetAllMessages = createAsyncThunk(
  "customer/GetAllMessages",
  async ({ apiBaseUrl, user }) => {
    try {
      const response = await ApiGET(`${apiBaseUrl}/me/messages`, user);
      const newArray = response.map((item) => {
        const newItem = { ...item };
        newItem.contact.profilePicture = "/static/images/avatar/1.jpg";
        return newItem;
      });
      console.log(newArray);
      return newArray;
    } catch (err) {
      return err;
    }
  }
);

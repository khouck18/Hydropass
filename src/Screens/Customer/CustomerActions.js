import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGET } from "../../Utils/axiosRequests";

export const GetAllMessages = createAsyncThunk(
  "customer/GetAllMessages",
  async ({ apiBaseUrl, user }) => {
    try {
      const response = await ApiGET(`${apiBaseUrl}/me/messages`, user);
      console.log("resp", response);
      const newArray = response.map((item) => {
        const newItem = { ...item };
        newItem.contact.profilePicture = "/static/images/avatar/1.jpg";
        return newItem;
      });
      newArray.forEach((item) => {
        item.messageHistory.sort((a, b) => a.timestamp - b.timestamp);
      });
      console.log(newArray, response);
      return newArray;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

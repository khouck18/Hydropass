import { createSlice } from "@reduxjs/toolkit";
import { GetAllMessages } from "./CustomerActions";

const initialState = {
  messages: [
    // {
    //     contact: {
    //         name: "Not weo",
    //         profilePicture: "/static/images/avatar/1.jpg",
    //         accountID: "6b3003fa-9164-41a5-afca-d73d5b993690"
    //     },
    //     messageHistory: [
    //         {
    //             sender: "",
    //             message: "",
    //             timestamp: ""
    //         },
    //     ]
    // },
  ],
  userInformation: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    governmentID: "",
    address: "",
    username: "",
    password: ""
  },
  loading: false,
  error: null
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetAllMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetAllMessages.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  }
});

export const customerActions = customerSlice.actions;

export default customerSlice;

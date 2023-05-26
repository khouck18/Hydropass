import { createSlice } from "@reduxjs/toolkit";
// import { PostNewHost, PostNewListing } from "./HostActions";

const initialState = {
  messages: [
    {
        contact: {
            name: "Not weo",
            profilePicture: "/static/images/avatar/1.jpg",
            accountID: "6b3003fa-9164-41a5-afca-d73d5b993690"
        },
        messageHistory: [
            {
                sender: "",
                message: "",
                timestamp: ""
            },
        ]
    },
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
//   extraReducers: (builder) => {
//     builder
//       .addCase(PostNewHost.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(PostNewHost.fulfilled, (state) => {
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(PostNewHost.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });
//     builder
//       .addCase(PostNewListing.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(PostNewListing.fulfilled, (state) => {
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(PostNewListing.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });
//   }
});

export const customerActions = customerSlice.actions;

export default customerSlice;

import { createSlice } from "@reduxjs/toolkit";
// import { PostNewHost, PostNewListing } from "./HostActions";

const initialState = {
  messages: [
    {
        contact: {
            name: "Billy Bob Joe",
            profilePicture: "/static/images/avatar/1.jpg",
            accountID: ""
        },
        messageHistory: [
            {
                sender: "You",
                message: "Hi Billy Bob, could you tell me more about your property on the river? Does it come with kayaks?",
                timestamp: "10:33 AM"
            },
            {
                sender: "Billy Bob Joe",
                message: "Howdy! Yes the property does have kayaks and you are welcome to use them during your stay. They are in the shed and the code will be provided once you have booked!",
                timestamp: "10:46 AM"
            },
        ]
    },
    {
        contact: {
            name: "Leon Deng",
            profilePicture: "/static/images/avatar/1.jpg",
            accountID: ""
        },
        messageHistory: [
            {
                sender: "You",
                message: "Hi Leon, could you tell me more about your beach house? Can I surf at your property or are there big sharks?",
                timestamp: "12:23 PM"
            },
            {
                sender: "Leon Deng",
                message: "Hi there, yes the property does have surfboards and there have been no recent shark attacks near by. However it is always good to be safe.",
                timestamp: "1:56 PM"
            },
        ]
    },
    {
        contact: {
            name: "Jane Doe",
            profilePicture: "/static/images/avatar/1.jpg",
            accountID: ""
        },
        messageHistory: [
            {
                sender: "You",
                message: "Hi Jane, could you tell me more about your fly fishing opportunities? Are you able to fish all day?",
                timestamp: "1:42 PM"
            },
            {
                sender: "Jane Doe",
                message: "Yes you can fly fish all day. We have lots of trout and salmon in the area!",
                timestamp: "1:50 PM"
            },
        ]
    },
  ],
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

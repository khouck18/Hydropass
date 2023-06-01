import { createSlice } from "@reduxjs/toolkit";
import { GetAllMessages } from "./CustomerActions";

const initialState = {
  messages: [],
  newMessages: [],
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
    createNewMessage: (state, action) => {
      if (action.payload.length === 0) {
        state.newMessages = [];
      } else {
        const newMessageArray = state.newMessages;
        state.newMessages = [
          ...newMessageArray,
          {
            contact: action.payload.message.recipient_id,
            message: {
              sender: action.payload.message.sender_id,
              message: action.payload.message.text,
              timestamp: action.payload.message.created_at,
              type: action.payload.type
            }
          }
        ];
      }
    },
    updateMessages: (state, action) => {
      const { accountId, updatedMessageHistory } = action.payload;
      const messageToUpdate = state.messages.find(
        (message) => message.contact.accountId === accountId
      );
      if (messageToUpdate) {
        messageToUpdate.messageHistory = updatedMessageHistory;
      }
    }
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

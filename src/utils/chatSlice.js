import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constrants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.length > 5 && state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
      // state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;

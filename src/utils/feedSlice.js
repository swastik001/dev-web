import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (s, a) => {
      return a.payload;
    },
    removeFeed: (s, a) => null,
  },
});

export default feedSlice.reducer;
export const { addFeed, removeFeed } = feedSlice.actions;

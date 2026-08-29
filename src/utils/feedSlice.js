import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (s, a) => {
      return a.payload;
    },
    removeUserFromFeed: (s, a) => {
      const newFeed = s.filter((user) => user._id !== a.payload);
      return newFeed;
    },
  },
});

export default feedSlice.reducer;
export const { addFeed, removeUserFromFeed } = feedSlice.actions;

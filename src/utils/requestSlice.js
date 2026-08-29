import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (s, a) => a.payload,
  },
});

export default requestSlice.reducer;
export const { addRequests } = requestSlice.actions;

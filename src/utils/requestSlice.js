import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (s, a) => a.payload,
    removeRequest: (s, a) => {
      const newA = s.filter((each) => each._id !== a.payload);
      return newA;
    },
  },
});

export default requestSlice.reducer;
export const { addRequests, removeRequest } = requestSlice.actions;

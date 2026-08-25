import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return nul;
    },
  },
});
export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;

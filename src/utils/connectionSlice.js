import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnections: (s, a) => a.payload,
    removeConnections: () => null,
  },
});
export default connectionSlice.reducer;
export const { addConnections, removeConnections } = connectionSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebar: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showShidebar: (state, action) => {
      state.isSidebar = !state.isSidebar;
    },
  },
});

export const { showShidebar } = uiSlice.actions;
export default uiSlice.reducer;

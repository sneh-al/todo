import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  favorites: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setLists: (state, action) => {
      state.lists = action.payload;
    },
  },
});

export const { setLists } = listSlice.actions;
export default listSlice.reducer;

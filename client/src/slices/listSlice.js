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
    deletelist: (state, action) => {
      state.lists = state.lists.filter((list) => list._id !== action.payload);
    },
    renamelist: (state, action) => {
      state.lists = state.lists.map((list) =>
        list._id == action.payload.listId
          ? { ...list, name: action.payload.name }
          : list
      );
    },
  },
});

export const { setLists, deletelist, renamelist } = listSlice.actions;
export default listSlice.reducer;

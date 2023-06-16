import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    logOut: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    setFavorites: (state, action) => {
      state.userInfo.favourite = action.payload;
    },
  },
});

export const { setCredentials, logOut, setFavorites } = authSlice.actions;
export default authSlice.reducer;

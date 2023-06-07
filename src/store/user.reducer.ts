import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    verification: null,
    token: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = { ...action.payload };
    },

    updateToken: (state, action) => {
      console.log(action.payload, "TOKEN");
      state.token = action.payload;
    },
    updateVerification: (state, action) => {
      state.verification = { ...action.payload };
    },
  },
});

export const { updateUser, updateVerification, updateToken } =
  userSlice.actions;

export default userSlice.reducer;

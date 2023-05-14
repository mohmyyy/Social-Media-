import { createSlice } from "@reduxjs/toolkit";

const checkForToken = localStorage.getItem("loginToken");
const checkForEMail = localStorage.getItem("email");
const isPresent = !!checkForToken;

const initialAuthState = {
  token: checkForToken,
  isLoggedIn: isPresent,
  email: checkForEMail,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      localStorage.setItem("loginToken", action.payload.token);
      localStorage.setItem("email", action.payload.email);
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = "";
      localStorage.removeItem("loginToken");
      localStorage.removeItem("email");
      state.isLoggedIn = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;

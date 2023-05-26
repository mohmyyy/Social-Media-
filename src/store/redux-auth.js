import { createSlice } from "@reduxjs/toolkit";
const checkAuthInfo = JSON.parse(localStorage.getItem("auth"));
const isPresent = !!checkAuthInfo;

const initialAuthState = {
  token: checkAuthInfo ? checkAuthInfo.loginToken : "",
  isLoggedIn: isPresent,
  email: checkAuthInfo ? checkAuthInfo.email : "",
  name: checkAuthInfo ? checkAuthInfo.name : "",
  image: checkAuthInfo
    ? checkAuthInfo.image
    : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMyP0CvlD2hsvdrbcROffHEBXqIC4OBj24DhsPEG4lfqDw-tzl7zvk8SActgTZzueYZRrZ8ms3GrRSGSiO-3GOgTE87XYBSpdpRh3NcWypJEywoq3m9TiN5obskqV1cnC1LLuYSmVzOaaiFYVsRGLX7MnT9SB6oGlyxILOB1iBsGmTUFiMtjJlZW1jLg/s579/blank-profile-picture-hd-images-photo-1.JPG",
  hashedEmail: checkAuthInfo ? checkAuthInfo.hashedEmail : "",
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      console.log(action.payload);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          loginToken: action.payload.token,
          email: action.payload.email,
          name: action.payload.name ? action.payload.name : "",
          image: action.payload.image ? action.payload.image : "",
          hashedEmail: action.payload.email.replace(/[^a-zA-Z0-9 ]/g, ""),
        })
      );
      state.token = action.payload.token;
      if (action.payload.name) {
        state.name = action.payload.name;
      }
      state.hashedEmail = action.payload.email.replace(/[^a-zA-Z0-9]/g, "");
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    updateProfile(state, action) {
      state.name = action.payload.name;
      state.image = action.payload.image;
      localStorage.setItem(
        "auth",
        JSON.stringify({
          loginToken: state.token,
          email: state.email,
          name: action.payload.name ? action.payload.name : "",
          image: action.payload.image ? action.payload.image : "",
          hashedEmail: state.hashedEmail.replace(/[^a-zA-Z0-9 ]/g, ""),
        })
      );
    },
    logout(state) {
      state.token = "";
      state.email = "";
      state.hashedEmail = "";
      state.name = "";
      localStorage.removeItem("auth");
      state.isLoggedIn = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;

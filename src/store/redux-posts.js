import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialpostState = { posts: [], allPost: [] };

const postSlice = createSlice({
  name: "AddPost",
  initialState: initialpostState,
  reducers: {
    addpost(state, action) {
      console.log(action.payload.time);
      state.posts = [
        {
          textPost: action.payload.text,
          imagePost: action.payload.image,
          likes: 0,
          numberofComment: 0,
          comments: [],
          time: action.payload.time,
        },
        ...state.posts,
      ];
      console.log(state.posts);
    },
    replace(state, action) {
      console.log(action.payload);
      state.posts = [...action.payload];
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;

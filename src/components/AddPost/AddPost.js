import React, { useState } from "react";
import "./AddPost.scss";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Post from "../Posts/Post";

const AddPost = () => {
  const [post, setPost] = useState({ textPost: "", imagePost: "" });

  const postInputHandler = (event) => {
    event.preventDefault();
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const submitPostHandler = (event) => {
    event.preventDefault();
    console.log(post);
    setPost({ textPost: "", imagePost: "" });
  };

  return (
    <div className="addpost">
      <div className="container">
        <div className="userpost">
          <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <input
            type="text"
            name="textPost"
            placeholder="What's on your mind?"
            value={post.textPost}
            onChange={postInputHandler}
          />
        </div>
        <hr />
        <div className="posticons">
          <div className="left">
            <div className="add-image">
              <label htmlFor="postImage">
                <AddPhotoAlternateOutlinedIcon />
              </label>
              <span>Add image</span>
              <input
                id="postImage"
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                name="imagePost"
                value={post.imagePost}
                onChange={postInputHandler}
              />
            </div>
            <div className="add-icon">
              <PlaceOutlinedIcon />
              <span>Add Place</span>
            </div>
            <div className="add-icon">
              <GroupAddOutlinedIcon />
              <span>Add Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={submitPostHandler}>
              <SendOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

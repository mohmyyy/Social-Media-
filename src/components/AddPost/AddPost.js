import React, { useState } from "react";
import "./AddPost.scss";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Post from "../Posts/Post";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../../store/redux-posts";
import moment from "moment";

const AddPost = () => {
  const [post, setPost] = useState({ textPost: "", imagePost: "" });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // const time = moment().startOf("minute").fromNow();
  const time = moment().format("LTS");

  const imagePostHandler = (event) => {
    // let file = event.target.files[0];
    // setPost({ ...post, imagePost: URL.createObjectURL(file) });
    let file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      // setProfile({ ...profile, image: reader.result });
      setPost({ ...post, imagePost: reader.result });
      // setProfile.image(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const textPostHandler = (event) => {
    setPost({ ...post, textPost: event.target.value });
  };
  const submitPostHandler = async (event) => {
    event.preventDefault();
    console.log(post);
    dispatch(
      postActions.addpost({
        text: post.textPost,
        image: post.imagePost,
        time: time,
      })
    );

    try {
      let response = await fetch(
        `https://bloom-54dfc-default-rtdb.firebaseio.com/${auth.hashedEmail}/myposts.json`,
        {
          method: "POST",
          body: JSON.stringify({
            textPost: post.textPost,
            imagePost: post.imagePost,
            time: time,
            likes: 0,
            numberofComment: 0,
            comments: null,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error);
    }

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
            onChange={textPostHandler}
          />
        </div>
        <hr />
        <span>{post.imagePost.slice(0, 30)}</span>
        <div className="posticons">
          <div className="left">
            <div className="add-image">
              <label htmlFor="postImage">
                <AddPhotoAlternateOutlinedIcon />
                <span>Add image</span>
              </label>
              <input
                id="postImage"
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                name="imagePost"
                onChange={imagePostHandler}
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

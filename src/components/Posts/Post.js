import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link, useSearchParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import { useState } from "react";
import { useSelector } from "react-redux";

const Post = ({ post }) => {
  console.log(post);
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const auth = useSelector((state) => state.auth);
  console.log(auth.email);

  const likeHandler = () => {
    setLiked((prevValue) => !prevValue);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <div className="details">
              <Link
                to={`/profile/${auth.email}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{auth.email}</span>
              </Link>
              <span className="date">{post.time}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.textPost}</p>
          {/* <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          /> */}
          <img src={post.imagePost} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={likeHandler}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {post.likes}
          </div>
          <div
            className="item"
            onClick={() => setCommentOpen((prevValue) => !prevValue)}
          >
            <TextsmsOutlinedIcon />
            {post.numberofComment}
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;

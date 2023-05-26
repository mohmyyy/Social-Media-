import React from "react";
import "./MyProfile.scss";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import AddPost from "../../components/AddPost/AddPost";

const MyProfile = () => {
  const auth = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.post.posts);
  const name = auth.name ? auth.name : auth.email;
  console.log(name);

  return (
    <div className="myprofile">
      <Profile
        profilePic={auth.image}
        profileName={name}
        personalProfile={true}
      />
    </div>
  );
};

export default MyProfile;

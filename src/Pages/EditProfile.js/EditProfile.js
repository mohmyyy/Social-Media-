import React, { useState } from "react";
import "./EditProfile.scss";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/redux-auth";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link, useNavigate } from "react-router-dom";

const URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC-H5S1Dc0YzTVN4v1gmRNN6j5Np8xmMU8";

const EditProfile = () => {
  const auth = useSelector((state) => state.auth);
  const [profile, setProfile] = useState({
    name: auth.name,
    image: auth.image,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileNameHandler = (event) => {
    setProfile({ ...profile, name: event.target.value });
  };

  const profileImageHandler = (event) => {
    let file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfile({ ...profile, image: reader.result });
      // setProfile.image(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const editProfileSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(
      authAction.updateProfile({ name: profile.name, image: profile.image })
    );
    try {
      let response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          idToken: auth.token,
          displayName: profile.name,
          // photoUrl: profile.image,
          deleteAttribute: null,
          returnSecureToken: true,
        }),
        headers: {
          "COntent-Type": "application/json",
        },
      });
      let data = await response.json();
      if (!response.ok) {
        throw new Error("Update Failed");
      }
      alert("Successfully Updated");
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="editprofile">
      <div className="container">
        <span onClick={() => navigate(-1)}>
          <CloseOutlinedIcon fontSize="medium" />
        </span>
        <center>
          <h2>Complete your profile</h2>
        </center>
        <div className="content">
          <div className="left">
            <img src={profile.image} alt="my-profile-pic" />
            <label htmlFor="profileImage">
              <AddAPhotoOutlinedIcon />
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/jpg, image/png, image/jpeg"
              name="editProfileImage"
              onChange={profileImageHandler}
            />
          </div>
          <div className="rigth">
            <form onSubmit={editProfileSubmitHandler}>
              <div className="profileName">
                <label htmlFor="editProfileName">Email</label>
                <input type="text" value={auth.email} disabled />
              </div>
              <div className="profileName">
                <label htmlFor="editProfileName">Name</label>
                <input
                  type="text"
                  placeholder="Add your Name"
                  value={profile.name}
                  onChange={profileNameHandler}
                />
              </div>
              <div className="profileName">
                <label htmlFor="editProfileName">Password</label>
                <input type="password" value="********" disabled />
              </div>
              <button>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

import React, { useEffect, useRef, useState } from "react";
import "./UserDropdownMenu.scss";
import DropdownItem from "./DropdownItem";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Portals from "../Portals/Portals";
import { authAction } from "../../store/redux-auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserDropdownMenu = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const name = auth.name ? auth.name : auth.email;
  const dropDownMenuRef = useRef();
  const dropdown = () => {
    setOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    let handler = (event) => {
      if (!dropDownMenuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const logoutUserHandler = () => {
    dispatch(authAction.logout());
    // <Navigate to="/login" />;
  };
  return (
    <div className="userdropdownmenu">
      <div className="container" ref={dropDownMenuRef}>
        <div className="menu-trigger" onClick={dropdown}>
          <img src={auth.image} alt="" />
        </div>
        {open && (
          <div className="dropdown-menu">
            <h3>
              {name}
              <br /> <span>Front-end Developer</span>{" "}
            </h3>
            <ul>
              <DropdownItem
                icon={<AccountCircleOutlinedIcon />}
                text="My Profile"
                path={`/myprofile/${name}`}
              />
              <DropdownItem
                icon={<ModeEditOutlineOutlinedIcon />}
                text="Edit Profile"
                path="/editprofile"
              />
              <DropdownItem
                icon={<MailOutlinedIcon />}
                text="Inbox"
                path="/inbox"
              />
              <DropdownItem
                icon={<SettingsOutlinedIcon />}
                text="Settings"
                path="/settings"
              />
              <span onClick={logoutUserHandler}>
                <DropdownItem
                  icon={<LoginOutlinedIcon />}
                  // logic={true}
                  // logout={logoutUserHandler}
                  text="log out"
                  path="/login"
                />
              </span>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropdownMenu;

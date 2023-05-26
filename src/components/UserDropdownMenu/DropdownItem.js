import React from "react";
import "./DropdownItem.scss";
import { Link } from "react-router-dom";

const DropdownItem = ({ icon, text, path, button = false}) => {
  // const isLoggedOut = logic ? logout : "";
  return (
    <li className="dropdownItem">
      <Link to={path}>
        <span>{icon}</span>
        <span> {text} </span>
      </Link>
    </li>
  );
};

export default DropdownItem;

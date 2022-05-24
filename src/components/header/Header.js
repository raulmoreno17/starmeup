import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "./Header.scss";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";

function Header() {
  let navigate = useNavigate();
  return (
    <div className={"navbar"}>
      <img
        src={require("../../assets/smuLogo.svg").default}
        alt="SVG"
        className="navbar__logo"
        onClick={() => {
          navigate("/home");
        }}
      ></img>
      <div className="navbar__divider"></div>
      <div className="navbar__routes-container">
        <NavLink activeClassName to="/home" className={"navbar__link"}>
          ACTIVITY FEED
        </NavLink>
        <NavLink activeClassName to="/leaderboard" className={"navbar__link"}>
          LEADERBOARD
        </NavLink>
        <NavLink activeClassName to="/me" className={"navbar__link"}>
          MY PROFILE
        </NavLink>
      </div>
      <div className="navbar__searchbox">
        <SearchBar />
      </div>
      <div className="navbar__icons-container">
        <div className="icon navbar__notification">
          <NotificationsOutlinedIcon
            style={{ color: "white" }}
            fontSize="medium"
          />
        </div>
        <Avatar
          alt="avatar"
          src={require("../../assets/avatar.png")}
          className="icon navbar__avatar"
        />
        <div className="icon navbar__apps">
          <AppsIcon style={{ color: "white" }} fontSize="medium" />
        </div>
      </div>
    </div>
  );
}
export default Header;

import React, { useState, useContext } from "react";
import { SignInBtn } from "../../components";
import { UserContext } from "../../contexts/user";
import "./style.css";

export default function Navbar() {
  const [user, setUser] = useContext(UserContext).user;
  return (
    <div className="navbar">
      <p>SocialMonkey</p>

      {user ? (
        <img className="navbar__img" src={user.photoURL} alt="img"/>
      ) : (
        <SignInBtn />
      )}
    </div>
  );
}

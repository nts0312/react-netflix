import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    //gradient used
    <div className="absolute w-full h-48 bg-gradient-to-b from-black py-0.5 px-6 z-10">
      <img
        className="w-52 h-23"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <div>
          <img src={user?.photoURL} alt="userIcon" />
          <button onClick={handleSignOut}> SignOut</button>
        </div>
      )}
    </div>
  );
}

export default Header;

import React from "react";

function Header() {
  return (
    //gradient used
    <div className="absolute w-full h-48 bg-gradient-to-b from-black py-0.5 px-6 z-10">
      <img
        className="w-52 h-23"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
    </div>
  );
}

export default Header;

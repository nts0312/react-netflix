import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //onAuthChanged will manage if signout call
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    //gradient used
    <div className="absolute w-screen h-24 bg-gradient-to-b from-black py-2 px-8 z-10 flex justify-between">
      <img
        className="w-52 h-23"
        src={LOGO}
        alt="netflix-logo"
      />
      {user && (
        <div className="flex justify-between w-12 mx-1">
          <img className="h-10 my-2"src={user?.photoURL} alt="userIcon" onClick={handleSignOut}/>
         {/* <button className="px-4" onClick={handleSignOut}> 🔽 </button> */}
        </div>
      )}
    </div>
  );
}

export default Header;

import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    //gradient used
    <div className="absolute w-screen h-24 bg-gradient-to-b from-black py-2 px-8 z-10 flex justify-between">
      <img className="w-52 h-23" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="grid grid-cols-3 content-end h-12">
          {showGptSearch && (
            <select
              className="grid-cols-1 rounded-sm text-center text-lg mr-12 w-21 h-9 border-4 text-white border-white-500 bg-black"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-indigo-800 text-white text-sm rounded-md grid-cols-1 h-9 mr-2"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          <img
            className="w-10 grid-cols-1 h-9 ml-32"
            src={user?.photoURL}
            alt="userIcon"
            onClick={handleSignOut}
          />
          {/* <button className="px-4" onClick={handleSignOut}> 🔽 </button> */}
        </div>
      )}
    </div>
  );
}

export default Header;

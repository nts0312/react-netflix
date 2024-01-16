import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validMessage, setValidMessage] = useState();
  const emailValue = useRef(null);
  const passwordValue = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      emailValue.current.value,
      passwordValue.current.value
    );
    setValidMessage(message);
    if (message) return;

    if (!isSignIn) {

      createUserWithEmailAndPassword(auth, emailValue.current.value, passwordValue.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidMessage(errorCode + "-" + errorMessage)
          // ..
        });
    } else {

      signInWithEmailAndPassword(auth, emailValue.current.value, passwordValue.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidMessage(errorCode + "-" + errorMessage)
        });
    }
  };

  const toggleSignInForm = () => {
    emailValue.current.value = "";
    emailValue.current.value = "";
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        className="bg-black absolute px-16 py-14 my-28 mx-auto left-0 right-0 w-[31%] rounded-md bg-opacity-[87%]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        //it stopping from form submit , which is automatic
      >
        <h1 className="text-white text-3xl font-medium my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 bg-[#333333] rounded-[6px] bg-opacity-100  text-white"
          />
        )}

        <input
          ref={emailValue}
          type="text"
          placeholder="Email"
          className={`${
            !isSignIn ? "" : "my-4"
          } w-full p-4 bg-[#333333] rounded-[6px] bg-opacity-100 text-white`}
        />

        <input
          ref={passwordValue}
          type="password"
          placeholder="Password"
          //template literals are used for classes based on conditions
          className={`${
            !isSignIn ? "my-4" : ""
          } w-full rounded-[6px] p-4 bg-[#333333]  text-white`}
        />
        <p className="text-[#cc2525]">{validMessage}</p>
        <button
          className="bg-[#E50815]  w-full p-4 my-10 text-white rounded-[6px]"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex space-x-2">
          <p className="text-[#989298]">
            {isSignIn ? "New to Netflix?" : "Already registered?"}
          </p>
          <p onClick={toggleSignInForm} className="text-white">
            {isSignIn ? "Sign Up." : "Sign In Now."}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

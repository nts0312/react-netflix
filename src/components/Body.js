import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

function Body() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <ErrorPage/>,
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;

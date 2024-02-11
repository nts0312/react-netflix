import React from "react";
import { MdInfoOutline } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[24%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-[30%]">{overview}</p>

      <button className=" cursor-pointer text-black bg-white p-2 px-8 text-base font-semibold rounded-lg border-2 border-black hover:opacity-70">
        <div className="flex">
          <IoMdPlay className="text-3xl" />
          <span className="px-3">Play</span>
        </div>
      </button>

      <button className=" cursor-pointer mx-2 bg-gray-500 text-white p-2 px-8 text-lg font-semibold bg-opacity-60 rounded-lg border-1 border-black hover:opacity-70">
        <div className="flex">
          <MdInfoOutline className="text-3xl" />
          <span className="px-3">More Info</span>
        </div>
      </button>
    </div>
  );
};

export default VideoTitle;

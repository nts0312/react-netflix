import React, { useEffect, useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addTrailerSound } from "../utils/movieSlice";

const VideoTitle = ({ title, overview, adult }) => {

   const  dispatch = useDispatch()
  const [isSound, setIsSound] = useState(false)
  const handleVideoSound = () => {
    setIsSound(current => !current)
  }

  useEffect( () => {
    setIsSound(false)
}, []);

 dispatch(addTrailerSound(isSound))
  return (
    <div className="w-[100%] h-[800px] pt-[24%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-[30%]">{overview}</p>

      <div className="flex justify-between w-screen">
        <div>
          <button className="cursor-pointer text-black bg-white p-2 px-8 text-lg font-semibold rounded-lg border-2 border-black hover:opacity-70">
            <div className="flex">
              <IoMdPlay className="text-3xl" />
              <span className="px-3">Play</span>
            </div>
          </button>

          <button className="cursor-pointer mx-2 bg-gray-500 text-white p-2 px-8 text-lg font-semibold bg-opacity-70 rounded-lg border-1 border-black hover:opacity-70">
            <div className="flex">
              <MdInfoOutline className="text-3xl" />
              <span className="px-3">More Info</span>
            </div>
          </button>
        </div>

       <div className="flex">
       {!isSound && <button onClick={handleVideoSound} className="text-2xl "><FaVolumeXmark/></button>}
       {isSound && <button onClick={handleVideoSound} className="text-2xl "><FaVolumeHigh/></button>}
        <div className=" text-black bg-opacity-60 bg-gray-500 h-9 mx-16">
          {adult && (
            <p className="py-1 border-l-4 border-l-fuchsia-50 text-lg h-9 text-white px-8">
              18+
            </p>
          )}

          {!adult && (
            <p className="py-1 border-l-4 border-l-fuchsia-50 text-lg h-9 text-white px-8">
              Under 18
            </p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

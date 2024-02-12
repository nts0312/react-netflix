import React, { useRef } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const trailerSound = useSelector((store) => store.movies?.trailerSound);
  console.log(trailerSound);

  useMovieTrailer({ movieId });
  return (
    <div>
      {trailerSound && (
        <iframe

          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=0&vq=hd1080"
          }
          allow="autoplay"
        ></iframe>
      )}

      {!trailerSound && (
        <iframe
   
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1&vq=hd1080"
          }
          allow="autoplay;"
          frameborder="0"
           allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;

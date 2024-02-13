import React, { useRef } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const trailerSound = useSelector((store) => store.movies?.trailerSound);

  useMovieTrailer({ movieId });
  return (
    <div>
      {trailerSound && (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube-nocookie.com/embed/" +
            trailerVideo?.key +
            "?playlist=" +
            trailerVideo?.key +
            "&loop=1&rel=0&controls=0&autoplay=1&mute=0&vq=hd1080"
          }
          allow="autoplay"
        ></iframe>
      )}

      {!trailerSound && (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube-nocookie.com/embed/" +
            trailerVideo?.key +
            "?playlist=" +
            trailerVideo?.key +
            "&loop=1&rel=0&controls=0&autoplay=1&mute=1&vq=hd1080"
          }
          allow="autoplay"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;

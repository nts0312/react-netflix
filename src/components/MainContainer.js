import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; //EARLY RETURN
  const mainMovie = movies[0];
  console.log(movies)

  const { original_title, overview, id, adult } = mainMovie;
  return (
    <div className="bg-white">
      <VideoTitle title={original_title} overview={overview} adult={adult} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

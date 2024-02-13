import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useMovieGenres from "../hooks/useMovieGenres";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies()
  useMovieGenres()
  useTopRatedMovies()
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

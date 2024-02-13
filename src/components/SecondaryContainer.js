import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const genres = useSelector((store) => store.movies.moviesGenres);

  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-20 pl-8">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />

        {/* {genres?.map((genre) => (
          <MovieList
            key={genre.id}
            title={genre?.name}
            movies={movies.popularMovies}
          />
        ))} */}
      </div>
    </div>
  );
};

export default SecondaryContainer;

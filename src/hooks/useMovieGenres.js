import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMoviesGenres } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieGenres = () => {
  const dispatch = useDispatch();
  const getMovieGenres = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addMoviesGenres(json.genres));
  };

  useEffect(() => {
    getMovieGenres();
  }, []);
};

export default useMovieGenres;

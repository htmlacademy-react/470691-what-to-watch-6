import {createSelector} from "reselect";
import {getMoviesBySelectedGenre} from "../../utils";
import {allMoviesSelector} from "../all-movies/selectors";

import {NameSpace} from "../reducer";

export const selectedMovieSelector = (state) => state[NameSpace.SELECTED_MOVIE].movie;
export const selectedMovieLoadedSelector = (state) => state[NameSpace.SELECTED_MOVIE].isLoaded;
export const relatedMoviesSelector = createSelector(
  allMoviesSelector,
  selectedMovieSelector,
  (allMovies, selectedMovie) =>
    selectedMovie
      ? getMoviesBySelectedGenre(allMovies, selectedMovie.genre).filter(({id}) => id !== +selectedMovie.id).slice(0, 4)
      : []
);

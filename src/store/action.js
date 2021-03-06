export const ActionType = {
  SET_GENRE: `main/setGenre`,
  GET_ALL_MOVIES: `main/getAllMovies`,
  REQUIRED_AUTHORIZATION: `main/requiredAuthorization`,
  LOGGED_IN: `user/loggedIn`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  GET_FILM: `main/getFilm`,
  GET_REVIEWS: `film/getReviews`
};


export const setGenre = (genre) => ({
  type: ActionType.SET_GENRE,
  payload: genre
});

export const getAllMovies = (data) => ({
  type: ActionType.GET_ALL_MOVIES,
  payload: data
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loggedIn = (email, avatar) => ({
  type: ActionType.LOGGED_IN,
  payload: {
    email,
    avatar
  }
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const getFilm = (film) => ({
  type: ActionType.GET_FILM,
  payload: film
});

export const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews
});


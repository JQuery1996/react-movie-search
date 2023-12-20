const API_KEY = "c86baddf0a6c1822242c699fb6bbb1b3";
const BASE_URL = "https://api.themoviedb.org/3";
const merge = (url: string) => `${BASE_URL}/${url}`;
export const MOVIES_API = (page: number = 1) =>
  merge(`discover/movie?page=${page}&api_key=${API_KEY}`);

export const MOVIES_SEARCH_API = (page: number = 1, query: string = "") =>
  merge(`search/movie?page=${page}&query=${query}&api_key=${API_KEY}`);

export const MOVIE_DETAILS_API = (id: number) =>
  merge(`movie/${id}?api_key=${API_KEY}`);

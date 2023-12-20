// Constants
const API_KEY = "c86baddf0a6c1822242c699fb6bbb1b3";
const BASE_URL = "https://api.themoviedb.org/3";

// Helper function to merge base URL with a specific endpoint
const mergeUrl = (endpoint: string) => `${BASE_URL}/${endpoint}`;

// Movie discovery API endpoint
export const discoverMoviesApi = (page: number = 1) =>
  mergeUrl(`discover/movie?page=${page}&api_key=${API_KEY}`);

// Movie search API endpoint
export const searchMoviesApi = (page: number = 1, query: string = "") =>
  mergeUrl(`search/movie?page=${page}&query=${query}&api_key=${API_KEY}`);

// Movie details API endpoint
export const movieDetailsApi = (id: number) =>
  mergeUrl(`movie/${id}?api_key=${API_KEY}`);

// Similar movies API endpoint
export const similarMoviesApi = (id: number, page: number = 1) =>
  mergeUrl(`movie/${id}/similar?page=${page}&api_key=${API_KEY}`);

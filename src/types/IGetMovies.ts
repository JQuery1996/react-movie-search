import { IMOVIE } from "./IMovie";

export interface IGETMOVIES {
  page: number;
  total_pages: number;
  total_results: number;
  results: IMOVIE[];
}

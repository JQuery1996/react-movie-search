import { MOVIE_DETAILS_API } from "api";
import { useEffect, useState } from "react";
import { IMOVIE } from "types";
import { api } from "utils";

export function useGetMovieDetails(id: number) {
  const [movie, setMovie] = useState<IMOVIE>({} as IMOVIE);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  async function getMovieDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(MOVIE_DETAILS_API(id));
      setMovie(response.data);
    } catch (error) {
      setError(error);
    } finally {
      // reset loading if success or fail
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMovieDetails();
  }, [id]);

  return { isLoading, error, movie, setMovie };
}

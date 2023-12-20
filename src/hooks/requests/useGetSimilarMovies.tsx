import { similarMoviesApi } from "api";
import { useEffect, useState } from "react";
import { IGETMOVIES } from "types";
import { api } from "utils";

export function useGetSimilarMovies({
  id,
  page = 1,
}: {
  id: number;
  page: number;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IGETMOVIES>({} as IGETMOVIES);
  const [error, setError] = useState<any>(null);
  async function getMovies() {
    try {
      setIsLoading(true);
      const response = await api.get(similarMoviesApi(id, page));
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      // reset loading if success or fail
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMovies();
  }, [id, page]);

  return { isLoading, data, setData, error, setError };
}

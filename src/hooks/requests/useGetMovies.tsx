import { MOVIES_API } from "api";
import { useEffect, useState } from "react";
import { IMOVIE } from "types";
import { api } from "utils";

interface IGETMOVIES {
  page: number;
  total_pages: number;
  total_results: number;
  results: IMOVIE[];
}
export function useGetMovies({
  page = 1,
  query = "",
}: {
  page: number;
  query: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IGETMOVIES>({} as IGETMOVIES);
  const [error, setError] = useState<any>(null);
  async function getMovies() {
    try {
      setIsLoading(true);
      const response = await api.get(MOVIES_API(page, query));
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
  }, [page, query]);

  return { isLoading, data, setData, error, setError };
}

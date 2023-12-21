import { Container } from "@mui/material";
import {
  MotionContainer,
  Page,
  StatusHandler,
  varSlide,
  EmptyContent,
  PageDescription,
} from "components";
import { useGetMovies } from "hooks";
import { MovieSearch, MoviesList } from "sections";
import { m } from "framer-motion";
import { useState } from "react";
export default function Movies() {
  // controll the pagination
  const [page, setPage] = useState<number>(1);
  // controll the search
  const [query, setQuery] = useState<string>("");
  // custom hook to get the movies from the api
  const { data, error, isLoading } = useGetMovies({ page, query });
  return (
    <Page title="movies">
      <MotionContainer>
        <PageDescription
          title="Movie List"
          description="Embark on a cinematic journey with our meticulously curated movie selection. Discover compelling stories, captivating performances, and timeless classics at your fingertips. Elevate your viewing experience on our movie homepage."
        />
        <StatusHandler isLoading={isLoading} error={error}>
          <Container sx={{ my: 4 }}>
            <MovieSearch query={query} setQuery={setQuery} />
            <m.div variants={varSlide().inLeft}>
              {data.results && data.results.length ? (
                <MoviesList
                  movies={data.results}
                  totalPages={data.total_pages}
                  page={page}
                  setPage={setPage}
                />
              ) : (
                <EmptyContent
                  title="NO DATA"
                  description="THERE IS NO MOVIES MATCH YOUR QUERY PLEASE TRY AGAIN WITH ANOTHER NAME"
                  sx={{ mt: 8 }}
                />
              )}
            </m.div>
          </Container>
        </StatusHandler>
      </MotionContainer>
    </Page>
  );
}

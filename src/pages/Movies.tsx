import { Container, Typography } from "@mui/material";
import {
  ContentStyle,
  MotionContainer,
  Page,
  StatusHandler,
  varSlide,
} from "components";
import { useGetMovies } from "hooks";
import { MoviesList } from "sections";
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
      <ContentStyle>
        <MotionContainer>
          <StatusHandler isLoading={isLoading} error={error}>
            <Container>
              <m.div variants={varSlide().inLeft}>
                <MoviesList
                  movies={data.results}
                  totalPages={data.total_pages}
                  page={page}
                  setPage={setPage}
                />
              </m.div>
            </Container>
          </StatusHandler>
        </MotionContainer>
      </ContentStyle>
    </Page>
  );
}

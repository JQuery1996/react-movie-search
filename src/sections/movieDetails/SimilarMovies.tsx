import { Container, Typography } from "@mui/material";
import { EmptyContent, StatusHandler } from "components";
import { useGetSimilarMovies } from "hooks";
import { useState } from "react";
import { MoviesList } from "sections";

export function SimilarMovies({ id }: { id: number }) {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useGetSimilarMovies({ id, page });
  return (
    <Container>
      <StatusHandler isLoading={isLoading} error={error}>
        <Typography
          variant="h4"
          sx={{
            textDecoration: "underline",
            textDecorationStyle: "double",
            textDecorationColor: (theme) => theme.palette.warning.dark,
            textUnderlineOffset: 4,
          }}
        >
          Similar Movies
        </Typography>
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
            description="THERE IS NO SIMILAR MOVIES FOR THIS MOVIE"
            sx={{ mt: 8 }}
          />
        )}
      </StatusHandler>
    </Container>
  );
}

import { Grid, Pagination } from "@mui/material";
import { MovieCard } from "components";
import { Dispatch, SetStateAction } from "react";
import { IMOVIE } from "types";

export function MoviesList({
  movies,
  totalPages,
  page,
  setPage,
}: {
  movies: IMOVIE[];
  totalPages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  function handlePaginationChange(
    _: React.ChangeEvent<unknown>,
    value: number
  ) {
    setPage(value);
  }
  return (
    <Grid container spacing={4} sx={{ my: 4 }}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <Pagination
          size="large"
          count={Math.min(totalPages, 500)}
          page={page}
          onChange={handlePaginationChange}
          color="primary"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

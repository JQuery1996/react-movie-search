import { Container, Grid } from "@mui/material";
import { MotionContainer, Page, StatusHandler, varZoom } from "components";
import { useGetMovieDetails } from "hooks";
import { useParams } from "react-router-dom";
import { MoviePoster, MovieMetadata, SimilarMovies } from "sections";
import { easeInOut, m } from "framer-motion";
export default function MovieDetails() {
  const { id } = useParams();
  const {
    movie,
    isLoading: getMovieDetailsIsLoading,
    error: getMovieDetailsHasError,
  } = useGetMovieDetails(parseInt(id!));
  return (
    <Page title="movie Details">
      <MotionContainer>
        <StatusHandler
          isLoading={getMovieDetailsIsLoading}
          error={getMovieDetailsHasError}
        >
          {movie && (
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <m.div variants={varZoom({ easeInOut }).in}>
                  <MoviePoster movie={movie} />
                </m.div>
              </Grid>
              <Grid item xs={12}>
                <Container>
                  <MovieMetadata movie={movie} />
                </Container>
              </Grid>
              <Grid item xs={12} sx={{ mx: 2 }}>
                <SimilarMovies id={parseInt(id!)} />
              </Grid>
            </Grid>
          )}
        </StatusHandler>
      </MotionContainer>
    </Page>
  );
}

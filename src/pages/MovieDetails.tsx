import { Container, Grid } from "@mui/material";
import { MotionContainer, Page, StatusHandler, varSlide } from "components";
import { useGetMovieDetails } from "hooks";
import { useParams } from "react-router-dom";
import { MovieImage, MovieMetadata, SimilarMovies } from "sections";
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
                <MovieImage movie={movie} />
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

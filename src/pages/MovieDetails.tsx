import { Container, Grid } from "@mui/material";
import { MotionContainer, Page, StatusHandler } from "components";
import { useGetMovieDetails } from "hooks";
import { useParams } from "react-router-dom";
import { MovieImage, MovieMetadata } from "sections";

export default function MovieDetails() {
  const { id } = useParams();
  const { movie, isLoading, error } = useGetMovieDetails(parseInt(id!));
  return (
    <Page title="movie Details">
      <MotionContainer>
        <StatusHandler isLoading={isLoading} error={error}>
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
            </Grid>
          )}
        </StatusHandler>
      </MotionContainer>
    </Page>
  );
}

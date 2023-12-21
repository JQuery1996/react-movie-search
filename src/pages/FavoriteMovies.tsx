import { Container, Grid } from "@mui/material";
import {
  MotionContainer,
  MovieCard,
  Page,
  PageDescription,
  varSlide,
} from "components";
import { FAVORITE_MOVIES_LOCAL_STORAGE_KEY } from "consts";
import { useLocalStorage } from "hooks";
import { IMOVIE } from "types";
import { m } from "framer-motion";

export default function FavoriteMovies() {
  const [favoriteMovies] = useLocalStorage(
    FAVORITE_MOVIES_LOCAL_STORAGE_KEY,
    []
  ) as [IMOVIE[]];
  return (
    <Page title="Favorite Movies">
      <MotionContainer>
        <PageDescription
          title="Favorite Movies"
          description="Explore your curated collection of beloved films. Elevate your experience by seamlessly adding movies to your favorites – simply click the heart icon while browsing to enrich your cinematic repertoire."
        />
        <m.div variants={varSlide().inLeft}>
          <Container sx={{ my: 4 }}>
            <Grid container spacing={3}>
              {favoriteMovies.map((movie) => (
                <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                  <MovieCard movie={movie} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </m.div>
      </MotionContainer>
    </Page>
  );
}

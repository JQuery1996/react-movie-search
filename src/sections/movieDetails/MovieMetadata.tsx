import {
  Box,
  Divider,
  Fab,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { ImdbIllustration } from "assets";
import { ClippedTypography, Iconify } from "components";
import { IMOVIE } from "types";
import { generateImageURL } from "utils";
import { CSS_STYLES } from "utils";
import { MovieGenres } from "./MovieGenres";
import { MovieListDetails } from "./MovieListDetails";
import { MovieCompanies } from "./MovieCompanies";
import { useLocalStorage } from "hooks";
import { FAVORITE_MOVIES_LOCAL_STORAGE_KEY } from "consts";
import { useMemo } from "react";
import { enqueueSnackbar, useSnackbar } from "notistack";

export function MovieMetadata({ movie }: { movie: IMOVIE }) {
  const [favoriteMovies, setFavoriteMovies] = useLocalStorage(
    FAVORITE_MOVIES_LOCAL_STORAGE_KEY,
    []
  ) as [IMOVIE[], (movie: IMOVIE[]) => void];
  const { enqueueSnackbar } = useSnackbar();
  function handleGoHome() {
    window.open(movie.homepage, "_blank");
  }
  function handleAddToFavorite() {
    inFavorite
      ? setFavoriteMovies(favoriteMovies.filter((m) => m.id !== movie.id))
      : setFavoriteMovies([...favoriteMovies, movie]);

    enqueueSnackbar(
      inFavorite
        ? "Movie removed from your favorite list"
        : "Movie added to your favorite list",
      {
        variant: inFavorite ? "error" : "success",
      }
    );
  }

  const inFavorite = useMemo(
    () => favoriteMovies.some((m) => m.id == movie.id),
    [favoriteMovies]
  );
  return (
    <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
      <Box sx={{ ...CSS_STYLES.FLEX_BETWEEN }}>
        <ClippedTypography
          variant="h1"
          image={generateImageURL(movie.poster_path)}
          title={movie.title}
        />
        <Tooltip title="Add To Favorite" arrow placement="bottom">
          <IconButton
            onClick={handleAddToFavorite}
            color={inFavorite ? "error" : "default"}
            size="large"
          >
            <Iconify icon={inFavorite ? "mdi:heart" : "mdi:heart-outline"} />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{
          ...CSS_STYLES.FLEX_BETWEEN,
        }}
      >
        <MovieGenres movie={movie} />
        <Stack
          direction="row"
          spacing={1}
          sx={{
            ...CSS_STYLES.FLEX_BETWEEN,
          }}
        >
          <ImdbIllustration sx={{ height: 50, width: 50 }} />
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {movie.vote_average}
          </Typography>
        </Stack>
      </Box>
      <Stack direction="row" spacing={1}>
        <Iconify
          icon="ph:tag-simple-fill"
          sx={{ height: 30, width: 30, color: "primary.main" }}
        />
        <Stack direction="column" spacing={0.5}>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {movie.overview}
          </Typography>
          {movie.tagline && (
            <Typography
              variant="body1"
              sx={{ color: "warning.dark", fontSize: "bold" }}
            >
              ({movie.tagline})
            </Typography>
          )}
        </Stack>
      </Stack>
      <MovieListDetails movie={movie} />
      <MovieCompanies movie={movie} />
      <Divider sx={{ my: 2 }} />
      <Box sx={{ ...CSS_STYLES.FLEX_CENTER }}>
        <Tooltip title="Go to movie" arrow placement="top">
          <Fab
            color="warning"
            aria-label="Go_TO_MOVIE"
            onClick={handleGoHome}
            sx={{ mt: 2, width: 80, height: 80 }}
          >
            <Iconify
              icon="line-md:play-filled"
              sx={{ width: 60, height: 60 }}
            />
          </Fab>
        </Tooltip>
      </Box>
    </Stack>
  );
}

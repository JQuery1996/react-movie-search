import { Box, Divider, Fab, Stack, Tooltip, Typography } from "@mui/material";
import { ImdbIllustration } from "assets";
import { ClippedTypography, Iconify } from "components";
import { IMOVIE } from "types";
import { generateImageURL } from "utils";
import { CSS_STYLES } from "utils";
import { MovieGenres } from "./MovieGenres";
import { MovieListDetails } from "./MovieListDetails";
import { MovieCompanies } from "./MovieCompanies";

export function MovieMetadata({ movie }: { movie: IMOVIE }) {
  function handleGoHome() {
    window.open(movie.homepage, "_blank");
  }
  return (
    <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
      <Box
        sx={{
          ...CSS_STYLES.FLEX_BETWEEN,
        }}
      >
        <Stack direction="column">
          <ClippedTypography
            variant="h1"
            image={generateImageURL(movie.poster_path)}
            title={movie.title}
          />

          <MovieGenres movie={movie} />
        </Stack>
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

          <Typography
            variant="body1"
            sx={{ color: "warning.dark", fontSize: "bold" }}
          >
            ({movie.tagline})
          </Typography>
        </Stack>
      </Stack>
      <MovieListDetails movie={movie} />
      <MovieCompanies movie={movie} />
      <Divider sx={{ my: 2 }} />
      <Box sx={{ ...CSS_STYLES.FLEX_CENTER }}>
        <Tooltip title="Go to movie" arrow placement="top">
          <Fab color="warning" aria-label="Go_TO_MOVIE" onClick={handleGoHome}>
            <Iconify
              icon="line-md:play-filled"
              sx={{ width: 40, height: 40 }}
            />
          </Fab>
        </Tooltip>
      </Box>
    </Stack>
  );
}

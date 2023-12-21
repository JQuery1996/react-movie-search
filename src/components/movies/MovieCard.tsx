import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Tooltip,
} from "@mui/material";
import { Iconify, Image } from "components";
import TextMaxLine from "components/TextMaxLine";
import { FAVORITE_MOVIES_LOCAL_STORAGE_KEY } from "consts";
import { useLocalStorage } from "hooks";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "routes";
import { IMOVIE } from "types";
import { generateImageURL } from "utils";

export function MovieCard({ movie }: { movie: IMOVIE }) {
  const navigate = useNavigate();
  const [favoriteMovies] = useLocalStorage(
    FAVORITE_MOVIES_LOCAL_STORAGE_KEY,
    []
  ) as [IMOVIE[]];
  const inFavorite = useMemo(
    () => favoriteMovies.some((m) => m.id == movie.id),
    [favoriteMovies]
  );
  return (
    <Card
      sx={{
        transition: "all .5s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 3,
        },
        position: "relative",
      }}
    >
      <Image
        sx={{ height: 300 }}
        src={generateImageURL(movie.poster_path)}
        title="green iguana"
      />
      <CardContent sx={{ p: 2 }}>
        <TextMaxLine variant="h6" line={2} persistent sx={{ fontWeight: 900 }}>
          {movie.title}
        </TextMaxLine>
        <Tooltip title={movie.overview} arrow sx={{ mt: 1 }} placement="top">
          <TextMaxLine
            variant="body2"
            line={3}
            persistent
            sx={{ color: "text.secondary" }}
          >
            {movie.overview}
          </TextMaxLine>
        </Tooltip>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          fullWidth
          variant="contained"
          startIcon={<Iconify className="icon" icon="tabler:arrow-right" />}
          onClick={() => navigate(PATHS.MOVIE_DETAILS(movie.id))}
        >
          View Details
        </Button>
      </CardActions>
      <Tooltip title="Average rating" arrow placement="top">
        <Chip
          label={movie.vote_average.toFixed(2)}
          sx={{
            position: "absolute",
            top: 4,
            right: 4,
            fontWeight: "bold",
          }}
          color="error"
        />
      </Tooltip>

      {inFavorite && (
        <Iconify
          icon="solar:star-bold"
          sx={{
            width: 25,
            height: 25,
            color: "yellow",
            position: "absolute",
            top: 4,
            left: 4,
          }}
        />
      )}
    </Card>
  );
}

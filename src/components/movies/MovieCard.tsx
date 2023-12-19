import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Iconify, Image } from "components";
import TextMaxLine from "components/TextMaxLine";
import { IMOVIE } from "types";
import { generateImageURL } from "utils";

export function MovieCard({ movie }: { movie: IMOVIE }) {
  return (
    <Card
      sx={{
        transition: "all .5s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 3,
        },
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
        <Tooltip title={movie.overview} arrow sx={{ mt: 1 }}>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

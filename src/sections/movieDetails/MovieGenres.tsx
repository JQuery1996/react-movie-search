import { Box, Typography } from "@mui/material";
import React from "react";
import { IMOVIE } from "types";

export function MovieGenres({ movie }: { movie: IMOVIE }) {
  return (
    movie.genres && (
      <Box sx={{ display: "flex", gap: 1 }}>
        {movie.genres.map((genre, index) => (
          <React.Fragment key={index}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {genre.name}
            </Typography>
            {index < movie.genres.length - 1 && (
              <Typography sx={{ fontWeight: 900 }}>|</Typography>
            )}
          </React.Fragment>
        ))}
      </Box>
    )
  );
}

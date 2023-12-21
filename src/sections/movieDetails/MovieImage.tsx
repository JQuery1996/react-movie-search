import { Box } from "@mui/material";
import { Image } from "components";
import { IMOVIE } from "types";
import { generateImageURL } from "utils";
export function MovieImage({ movie }: { movie: IMOVIE }) {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Image
        style={{
          height: 500,
        }}
        src={generateImageURL(movie.poster_path)}
        title="green iguana"
      />
      {!movie.adult && (
        <Image
          style={{
            height: 100,
            width: 100,
            position: "absolute",
            bottom: -50,
            right: 0,
          }}
          src="/adult-content.png"
          title="Warning Adult Content"
        />
      )}
    </Box>
  );
}

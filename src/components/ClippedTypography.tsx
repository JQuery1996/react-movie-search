import { Typography, TypographyProps } from "@mui/material";
import { generateImageURL } from "utils";

export function ClippedTypography({
  image,
  title,
  ...other
}: {
  image: string;
  title: string;
} & TypographyProps) {
  return (
    <Typography
      sx={{
        backgroundImage: `url(${generateImageURL(image)})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "transparent",
        backgroundClip: "text",
        fontWeight: "bold",
      }}
      {...other}
    >
      {title}
    </Typography>
  );
}

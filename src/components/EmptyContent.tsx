// @mui
import { Box, BoxProps, styled, Typography } from "@mui/material";
import { Image } from "./Image";
//

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

// ----------------------------------------------------------------------

export function EmptyContent({
  title,
  description,
  img,
  imgSx,
  ...other
}: {
  title?: string;
  description?: string;
  img?: string;
  imgSx?: BoxProps;
} & BoxProps) {
  return (
    <RootStyle {...other}>
      <Image
        disabledEffect
        visibleByDefault
        alt="NO DATA"
        src={img || "/illustration_empty_content.svg"}
        sx={{ height: 240, mb: 3, ...(imgSx as any) }}
      />

      {title && (
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
      )}

      {description && (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      )}
    </RootStyle>
  );
}

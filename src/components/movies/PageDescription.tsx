import { ThemeContext } from "@emotion/react";
import { Stack, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

export function PageDescription({
  title,
  description,
  color,
}: {
  title: ReactNode;
  description: string;
  color?: any;
}) {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        px: { lg: 6.5, lx: 6.5, md: 2, sm: 2, xs: 2 },
        py: 2.5,
        bgcolor:
          color ?? ((theme) => (theme as any).palette.background.neutral),
        boxShadow: 1,
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body2" sx={{ px: 10, color: "text.secondary" }}>
        {description}
      </Typography>
    </Stack>
  );
}

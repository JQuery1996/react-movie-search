import { ReactNode, forwardRef } from "react";
// @mui
import { Typography, Link, TypographyVariant } from "@mui/material";
import GetFontValue from "utils/getFontValue";
// utils

// ----------------------------------------------------------------------

const TextMaxLine = forwardRef(
  (
    {
      asLink,
      variant = "body1",
      line = 2,
      persistent = false,
      children,
      sx,
      ...other
    }: TTextMaxLine,
    ref: any
  ) => {
    const { lineHeight } = GetFontValue(variant);

    const style = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: line,
      WebkitBoxOrient: "vertical",
      ...(persistent && {
        height: lineHeight * line,
      }),
      ...sx,
    };

    if (asLink) {
      return (
        <Link
          color="inherit"
          ref={ref}
          variant={variant}
          sx={{ ...style }}
          {...other}
        >
          {children}
        </Link>
      );
    }

    return (
      <Typography ref={ref} variant={variant} sx={{ ...style }} {...other}>
        {children}
      </Typography>
    );
  }
);

type TTextMaxLine = {
  asLink?: boolean;
  children: ReactNode;
  line?: number;
  persistent?: boolean;
  sx?: any;
  variant: TypographyVariant;
};

export default TextMaxLine;

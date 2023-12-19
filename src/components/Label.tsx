// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

const RootStyle = styled("span")(
  ({ theme, ownerState }: { theme?: any; ownerState: any }) => {
    const isLight = theme.palette.mode === "light";
    const { color, variant } = ownerState;

    const styleFilled = (
      color:
        | "default"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
    ) => ({
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
    });

    const styleOutlined = (
      color:
        | "default"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
    ) => ({
      color: theme.palette[color].main,
      backgroundColor: "transparent",
      border: `1px solid ${theme.palette[color].main}`,
    });

    const styleGhost = (
      color:
        | "default"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
    ) => ({
      color: theme.palette[color][isLight ? "dark" : "light"],
      backgroundColor: alpha(theme.palette[color].main, 0.16),
    });

    const styleTransparnt = (
      color:
        | "default"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
    ) => ({
      color: theme.palette[color].contrastText,
      backgroundColor: "transparent",
    });

    return {
      height: 22,
      minWidth: 22,
      lineHeight: 0,
      borderRadius: 4,
      cursor: "default",
      whiteSpace: "nowrap",
      display: "inline-flex",
      justifyContent: "flex-start",
      alignItems: "center",
      alignContent: "center",
      padding: theme.spacing(2, 2),
      color: theme.palette.grey[800],
      // fontSize: theme.typography.pxToRem(16),
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.grey[300],
      fontWeight: theme.typography.fontWeightBold,

      ...(color !== "default"
        ? {
            ...(variant === "filled" && { ...styleFilled(color) }),
            ...(variant === "outlined" && { ...styleOutlined(color) }),
            ...(variant === "ghost" && { ...styleGhost(color) }),
            ...(variant === "transparent" && { ...styleTransparnt(color) }),
          }
        : {
            ...(variant === "outlined" && {
              backgroundColor: "transparent",
              color: theme.palette.text.primary,
              border: `1px solid ${theme.palette.grey[500]}`,
            }),
            ...(variant === "ghost" && {
              color: isLight
                ? theme.palette.text.secondary
                : theme.palette.common.white,
              backgroundColor: theme.palette.grey[300],
            }),
            ...(variant === "transparent" && {
              color: isLight
                ? theme.palette.text.secondary
                : theme.palette.common.white,
              backgroundColor: "transparent",
            }),
          }),
    };
  }
);

export function Label({
  children,
  color = "default",
  variant = "ghost",
  startIcon,
  endIcon,
  sx,
}: {
  children?: ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  variant?: "filled" | "outlined" | "ghost" | "transparent";
  startIcon?: any;
  endIcon?: any;
  sx?: any;
}) {
  const style = {
    "& svg, img": { objectFit: "cover" },
  };

  return (
    <RootStyle
      ownerState={{ color, variant }}
      sx={{
        ...(startIcon && { pl: 0.75 }),
        ...(endIcon && { pr: 0.75 }),
        ...sx,
      }}
    >
      {startIcon && <Box sx={{ mr: 0.75, ...style }}>{startIcon}</Box>}

      {children}

      {endIcon && <Box sx={{ ml: 0.75, ...style }}>{endIcon}</Box>}
    </RootStyle>
  );
}

import { m } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Fab, type BoxProps, type FabProps } from "@mui/material";

const FabButtonAnimate = forwardRef(
  (
    {
      color = "primary",
      size = "large",
      children,
      sx,
      sxWrap,
      ...other
    }: {
      color:
        | "inherit"
        | "default"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "error"
        | undefined;
      size: "small" | "medium" | "large" | undefined;
      children: ReactNode;
      sxWrap: BoxProps;
      sx: FabProps;
    },
    ref:
      | ((instance: HTMLButtonElement | null) => void)
      | React.RefObject<HTMLButtonElement>
      | null
      | undefined
  ) => {
    const theme = useTheme();

    if (
      color === "default" ||
      color === "inherit" ||
      color === "primary" ||
      color === "secondary"
    ) {
      return (
        <AnimateWrap size={size} sxWrap={sxWrap}>
          <Fab ref={ref} size={size} color={color} sx={sx} {...other}>
            {children}
          </Fab>
        </AnimateWrap>
      );
    }

    return (
      <AnimateWrap size={size} sxWrap={sxWrap}>
        <Fab
          ref={ref}
          size={size}
          sx={{
            boxShadow: (theme as any).customShadows[color],
            color: theme.palette[color].contrastText,
            bgcolor: theme.palette[color].main,
            "&:hover": {
              bgcolor: theme.palette[color].dark,
            },
            ...sx,
          }}
          {...other}
        >
          {children}
        </Fab>
      </AnimateWrap>
    );
  }
);

export default FabButtonAnimate;

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.07 },
  tap: { scale: 0.97 },
};

const varMedium = {
  hover: { scale: 1.06 },
  tap: { scale: 0.98 },
};

const varLarge = {
  hover: { scale: 1.05 },
  tap: { scale: 0.99 },
};

function AnimateWrap({
  size,
  children,
  sxWrap,
}: {
  size: "small" | "medium" | "large";
  children: ReactNode;
  sxWrap: BoxProps;
}) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: "inline-flex",
        ...sxWrap,
      }}
    >
      {children}
    </Box>
  );
}

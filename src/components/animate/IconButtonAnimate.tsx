import PropTypes from "prop-types";
import { m } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
// @mui
import { Box, IconButton, type IconButtonProps } from "@mui/material";

type TIconButtonAnimate = {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
} & IconButtonProps;
export const IconButtonAnimate = forwardRef(
  (
    { children, size = "medium", ...other }: TIconButtonAnimate,
    ref:
      | ((instance: HTMLButtonElement | null) => void)
      | React.RefObject<HTMLButtonElement>
      | null
      | undefined
  ) => (
    <AnimateWrap size={size}>
      <IconButton size={size} ref={ref} {...other}>
        {children}
      </IconButton>
    </AnimateWrap>
  )
);

export default IconButtonAnimate;

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

AnimateWrap.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

function AnimateWrap({
  size,
  children,
}: {
  size: "small" | "medium" | "large";
  children: ReactNode;
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
      }}
    >
      {children}
    </Box>
  );
}

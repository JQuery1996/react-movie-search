import { type ReactNode } from "react";
import { m } from "framer-motion";
// @mui
import { Box, type BoxProps } from "@mui/material";
// hooks
import { useResponsive } from "hooks";
//
import { varContainer } from ".";

type TMotionViewPort = {
  children: ReactNode;
  disableAnimatedMobile?: boolean;
  other?: BoxProps;
};
export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: TMotionViewPort) {
  const isDesktop = useResponsive("up", "sm");

  if (!isDesktop && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}

import { type ReactNode } from "react";
import { m } from "framer-motion";
// @mui
import { Box, type BoxProps } from "@mui/material";
//
import { varContainer } from "./variants";

type IMotionContainer = {
  animate?: boolean;
  action?: boolean;
  children: ReactNode;
} & BoxProps;
export default function MotionContainer({
  animate,
  action = false,
  children,
  ...other
}: IMotionContainer) {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? "animate" : "exit"}
        variants={varContainer()}
        {...other}
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...other}
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
}

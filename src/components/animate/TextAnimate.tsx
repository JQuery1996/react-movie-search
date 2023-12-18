import { m } from "framer-motion";
// @mui
import { Box, type BoxProps } from "@mui/material";
//
import { varFade } from "./variants";

type ITextAnimate = {
  text: string;
  variants?: any;
  sx?: BoxProps;
  other?: any;
};

export default function TextAnimate({
  text,
  variants,
  sx,
  ...other
}: ITextAnimate) {
  return (
    <Box
      component={m.h1}
      sx={{
        typography: "h1",
        overflow: "hidden",
        display: "inline-flex",
        ...sx,
      }}
      {...other}
    >
      {text.split("").map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}

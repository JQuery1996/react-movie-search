import { forwardRef, type Ref } from "react";
import { Helmet } from "react-helmet-async";

// @mui
import { Box, type BoxProps } from "@mui/material";
import { IPage } from "types";

export const Page = forwardRef(
  ({ title = "", meta, children, ...other }: IPage, ref: Ref<BoxProps>) => {
    return (
      <>
        <Helmet>
          <title>{title} | MSA </title>
          {meta}
        </Helmet>
        <Box
          ref={ref}
          {...other}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
      </>
    );
  }
);

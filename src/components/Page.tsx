import { forwardRef, type ReactNode, type Ref } from "react";
import { Helmet } from "react-helmet-async";

// @mui
import { Box, type BoxProps } from "@mui/material";

type TPage = {
  children: ReactNode;
  title?: string;
  meta?: ReactNode;
  other?: BoxProps;
};

export const Page = forwardRef(
  ({ title = "", meta, children, ...other }: TPage, ref: Ref<BoxProps>) => {
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

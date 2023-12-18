import { BoxProps } from "@mui/material";
import { ReactNode } from "react";

export interface IPage {
  children: ReactNode;
  title?: string;
  meta?: ReactNode;
  other?: BoxProps;
}

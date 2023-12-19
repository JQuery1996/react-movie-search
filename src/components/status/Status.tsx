import { useMemo, type ReactNode } from "react";

// @mui
import { Grid } from "@mui/material";
import ErrorMessage from "./Error";
import { LoadingScreen } from "../LoadingScreen";

type TStatusHandler = {
  isLoading: boolean;
  error: any;
  children: ReactNode;
};
export default function StatusHandler({
  isLoading,
  error,
  children,
}: TStatusHandler) {
  const Component: any = useMemo(() => {
    if (error) {
      return (
        <Grid container justifyContent={"center"}>
          <ErrorMessage />
        </Grid>
      );
    }
    if (isLoading) {
      return (
        <Grid container justifyContent={"center"}>
          <LoadingScreen />
        </Grid>
      );
    }
    return children;
  }, [error, isLoading, children]);
  return Component;
}

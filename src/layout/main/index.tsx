import { Outlet } from "react-router-dom";
// @mui
import { Box, Stack } from "@mui/material";
// components
import { Header } from "./Header";

// ----------------------------------------------------------------------

export function MainLayout() {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <Header />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      {/* <MainFooter /> */}
    </Stack>
  );
}

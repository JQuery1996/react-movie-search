import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Logo, ToggleTheme } from "components";
import { useResponsive } from "hooks";

export function Header() {
  const isSmall = useResponsive("down", "md");
  return (
    <AppBar position="static" variant="elevation" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Typography
            variant="h4"
            noWrap
            sx={{
              mx: 2,
              color: "inherit",
              textDecoration: "none",
              fontWeight: 900,
              flexGrow: 1,
            }}
          >
            {isSmall ? "MSA" : "Movie Search Application"}
          </Typography>
          <ToggleTheme />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Iconify, Logo, ToggleTheme } from "components";
import { useResponsive } from "hooks";
import { useNavigate } from "react-router-dom";
import { PATHS } from "routes";

export function Header() {
  const isSmall = useResponsive("down", "md");
  const navigate = useNavigate();
  return (
    <AppBar position="static" variant="outlined" color="default" elevation={0}>
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
          <Tooltip title="Favorite Movies">
            <IconButton
              color="error"
              onClick={() => navigate(PATHS.Favorite_MOVIES)}
            >
              <Iconify icon="ic:baseline-favorite" />
            </IconButton>
          </Tooltip>
          <ToggleTheme />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

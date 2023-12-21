import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import { Iconify, Logo, ToggleTheme } from "components";
import { useResponsive } from "hooks";
import { useNavigate } from "react-router-dom";
import { PATHS } from "routes";

const shine = keyframes({
  "0%": {
    backgroundPosition: "0",
  },
  "60%": {
    backgroundPosition: "600px",
  },
  "100%": {
    backgroundPosition: "600px",
  },
});

const StyledTypography = styled(Typography)({
  color: "hsl(0, 0%, 28%)",
  fontWeight: "bold !important",
  fontFamily: "monospace",
  cursor: "pointer",
  textTransform: "uppercase",
  background:
    "linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${shine} 3s infinite ease-in-out`,
});
export function Header() {
  const isSmall = useResponsive("down", "md");
  const navigate = useNavigate();
  return (
    <AppBar position="static" variant="outlined" color="default" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <StyledTypography
            variant="h4"
            noWrap
            sx={{
              mx: 2,
              flexGrow: 1,
            }}
          >
            {isSmall ? "MSA" : "Movie Search Application"}
          </StyledTypography>
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

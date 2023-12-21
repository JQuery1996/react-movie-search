import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { CSS_STYLES } from "utils";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";
// components
import { Logo } from "components";

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: (theme as any).palette.background.neutral,
}));

// ----------------------------------------------------------------------

export function Footer() {
  return (
    <RootStyle>
      <Divider />
      <Container>
        <Box sx={{ ...CSS_STYLES.FLEX_BETWEEN }}>
          <Logo sx={{ mx: { xs: "auto", md: "inherit" } }} />

          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
            }}
          >
            © {new Date().getFullYear()}. All rights reserved
          </Typography>
        </Box>
      </Container>
    </RootStyle>
  );
}

import { Container, Typography } from "@mui/material";
import { Page } from "components";
import Logo from "components/Logo";

export default function Movies() {
  return (
    <Page title="movies">
      <Container>
        <Typography variant="h1">Movies List</Typography>
      </Container>
    </Page>
  );
}

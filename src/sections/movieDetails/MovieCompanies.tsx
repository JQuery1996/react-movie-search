import { Grid, Stack, Typography } from "@mui/material";
import { Iconify, Image } from "components";
import { IMOVIE } from "types";
import { generateImageURL } from "utils";
export function MovieCompanies({ movie }: { movie: IMOVIE }) {
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={1}>
        <Iconify
          icon="mdi:company"
          sx={{ width: 25, height: 25, color: "primary.main" }}
        />
        <Typography
          variant="h6"
          sx={{
            textDecoration: "underline",
            textDecorationStyle: "double",
            textDecorationColor: (theme) => theme.palette.warning.dark,
            textUnderlineOffset: 4,
          }}
        >
          Production Companies
        </Typography>
      </Stack>
      <Grid container spacing={1}>
        {movie.production_companies
          .filter((company) => !!company.logo_path)
          .map((company) => (
            <Grid
              key={company.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                gap: 2,
              }}
            >
              <Image
                src={generateImageURL(company.logo_path)}
                style={{ height: 50, width: 50, objectFit: "contain" }}
              />
              <Typography variant="body1">{company.name}</Typography>
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
}

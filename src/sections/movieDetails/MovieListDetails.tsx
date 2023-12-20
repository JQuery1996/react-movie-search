import { Grid, Stack, Typography } from "@mui/material";
import { Iconify } from "components";
import moment from "moment";
import { IMOVIE } from "types";
export function MovieListDetails({ movie }: { movie: IMOVIE }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={0.2}>
            <Iconify
              icon="icon-park-outline:dot"
              sx={{ width: 25, height: 25, color: "text.secondary" }}
            />
            <Typography sx={{ fontWeight: "bold", color: "text.secondary" }}>
              Vote Average :
            </Typography>
          </Stack>
          <Typography sx={{ fontWeight: 900 }}>{movie.vote_average}</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={0.2}>
            <Iconify
              icon="icon-park-outline:dot"
              sx={{ width: 25, height: 25, color: "text.secondary" }}
            />
            <Typography sx={{ fontWeight: "bold", color: "text.secondary" }}>
              Vote Count :
            </Typography>
          </Stack>
          <Typography sx={{ fontWeight: 900 }}>{movie.vote_count}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={0.5}>
            <Iconify
              icon="icon-park-outline:dot"
              sx={{ width: 25, height: 25, color: "text.secondary" }}
            />
            <Typography sx={{ fontWeight: "bold", color: "text.secondary" }}>
              Status :
            </Typography>
          </Stack>
          <Typography sx={{ fontWeight: 900, color: "primary" }}>
            {movie.status}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={0.2}>
            <Iconify
              // icon="lets-icons:date-today-duotone"
              icon="icon-park-outline:dot"
              sx={{ width: 25, height: 25, color: "text.secondary" }}
            />
            <Typography sx={{ fontWeight: "bold", color: "text.secondary" }}>
              Release Date :
            </Typography>
          </Stack>
          <Typography sx={{ fontWeight: 900 }}>
            {moment(movie.release_date).format("LL")}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={0.5}>
            <Iconify
              // icon="fa6-solid:language"
              icon="icon-park-outline:dot"
              sx={{ width: 25, height: 25, color: "text.secondary" }}
            />
            <Typography sx={{ fontWeight: "bold", color: "text.secondary" }}>
              Languages :
            </Typography>
          </Stack>
          <Typography sx={{ fontWeight: 900 }}>
            {movie.spoken_languages
              .map((language) => language.english_name)
              .join(" | ")}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

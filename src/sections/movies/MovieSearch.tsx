import { Button, Grid, InputAdornment } from "@mui/material";
import { ETextField, Iconify } from "components";
import { Dispatch, SetStateAction, useState } from "react";

export function MovieSearch({
  query,
  setQuery,
}: {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}) {
  const [currentQuery, setCurrentQuery] = useState<string>(query);
  function handleSearch() {
    setQuery(currentQuery);
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={11}>
        <ETextField
          placeholder="Enter the movie name to search for"
          size="medium"
          name="query"
          value={currentQuery}
          onChange={(e) => setCurrentQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="mdi:movie-search"
                  sx={{ color: "primary.main" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={1}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ height: 42, px: 5 }}
          onClick={handleSearch}
          startIcon={<Iconify icon="material-symbols-light:search" />}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

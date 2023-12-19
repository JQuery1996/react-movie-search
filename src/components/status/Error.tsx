import { m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

// @mui
import { Button, Typography } from "@mui/material";

// components
import { varBounce } from "../animate";

// assets
import { SeverErrorIllustration } from "assets";

const ContentStyle = styled("div")(() => ({
  maxWidth: 480,
  margin: "30px auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

export default function Error() {
  const navigate = useNavigate();
  function handleGoToHome() {
    navigate("/");
  }
  return (
    <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
      <m.div variants={varBounce().in}>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          There was an error, please try again later.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <SeverErrorIllustration sx={{ height: 260, my: { xs: 5 } }} />
      </m.div>

      <m.div variants={varBounce().in}>
        <Button variant="contained" onClick={handleGoToHome}>
          Back to home
        </Button>
      </m.div>
    </ContentStyle>
  );
}

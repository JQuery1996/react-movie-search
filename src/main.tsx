import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// react-router
import { BrowserRouter } from "react-router-dom";

// manage document head
// this package is fork from react-helmet
import { HelmetProvider } from "react-helmet-async";

// setting context
import { SettingsProvider } from "contexts";

// notification
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import { styled } from "@mui/material";
const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "#4db6ac",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "#FF4842",
  },
}));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <SettingsProvider>
      <BrowserRouter>
        <React.StrictMode>
          <SnackbarProvider
            maxSnack={3}
            dense
            Components={{
              success: StyledMaterialDesignContent,
              error: StyledMaterialDesignContent,
            }}
          >
            <App />
          </SnackbarProvider>
        </React.StrictMode>
      </BrowserRouter>
    </SettingsProvider>
  </HelmetProvider>
);

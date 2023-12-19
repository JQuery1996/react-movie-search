import { MotionLazyContainer, ProgressBarStyle } from "components";
import "./App.css";
import { Router } from "routes";
import ThemeProvider from "theme";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <>
            <ProgressBarStyle />
            <Router />
          </>
        </AnimatePresence>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}

export default App;

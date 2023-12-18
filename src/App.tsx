import { MotionLazyContainer } from "components/animate";
import "./App.css";
import { Router } from "routes";
import { ProgressBarStyle } from "components/progressBar";

function App() {
  return (
    <MotionLazyContainer>
      <ProgressBarStyle />
      <Router />
    </MotionLazyContainer>
  );
}

export default App;

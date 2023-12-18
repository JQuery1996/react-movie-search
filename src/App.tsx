import { MotionLazyContainer, ProgressBarStyle } from "components";
import "./App.css";
import { Router } from "routes";

function App() {
  return (
    <MotionLazyContainer>
      <ProgressBarStyle />
      <Router />
    </MotionLazyContainer>
  );
}

export default App;

import { MotionLazyContainer } from "components/animate";
import "./App.css";
import { Router } from "routes";

function App() {
  return (
    <MotionLazyContainer>
      <Router />
    </MotionLazyContainer>
  );
}

export default App;

import NavBar from "./components/NavBar";
import TrackBar from "./components/TrackBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <TrackBar />
    </BrowserRouter>
  );
}

export default App;

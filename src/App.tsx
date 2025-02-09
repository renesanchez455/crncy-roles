import { CssBaseline } from "@mui/material";
import ProgAppBar from "./components/CrncyAppBar";
import CrncyApiCall from "./hooks/CrncyCall";

function App() {
  return (
    <>
      <ProgAppBar />
      <CssBaseline />
      <CrncyApiCall />
    </>
  );
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./pages/Loading";
import SetTimerPage from "./pages/setTimerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/set-timer" element={<SetTimerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

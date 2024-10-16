import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./pages/Loading";
import SetTimerPage from "./pages/setTimerPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import AnalogTimerPage from "./pages/AnalogTimerPage";
import BreakPage from "./pages/BreakPage";
import DigitalTimerPage from "./pages/DigitalTimerPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/set-timer" element={<SetTimerPage />} />
          <Route path="/analog" element={<AnalogTimerPage />} />
          <Route path="/digital" element={<DigitalTimerPage />} />
          <Route path="/break" element={<BreakPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

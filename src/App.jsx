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
      <BrowserRouter basename={import.meta.env.VITE_APP_BASE_URL}>
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
// other method how to do basname!
/*     <BrowserRouter basename={import.meta.env.DEV ? "/" : "/timer/"}>

 
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
  };
 
  if (command !== "serve") {
    config.base = "/timer/";
  }
 
  return config;
}); */

//  one more variant
/*  package.json
   "scripts": {
    "dev": "NODE_ENV=development vite",
    "build": "NODE_ENV=production vite build ",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: process.env.NODE_ENV === "production" ? "/Interval-app-reactJs" : "/",
    });
  // App
  <BrowserRouter basename={isProduction()}>
         
  function isProduction() {
            if (import.meta.env.PROD) {
              return import.meta.env.BASE_URL
            }
            else {
              return ""
            }
          }
  */

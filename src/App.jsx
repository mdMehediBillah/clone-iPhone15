import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  GsapFrom,
  GsapMainPage,
  GsapStagger,
  GsapTimeline,
  GsapTo,
  GsapToFrom,
  HomePage,
  GsapScrollTrigger,
  GsapText,
} from "./pages";
import { SiteNavigation } from "./components";
function App() {
  return (
    <main>
      <Router>
        <SiteNavigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gsap" element={<GsapMainPage />} />
          <Route path="/gsapTo" element={<GsapTo />} />
          <Route path="/gsapFrom" element={<GsapFrom />} />
          <Route path="/gsapFromTo" element={<GsapToFrom />} />
          <Route path="/gsapTimeline" element={<GsapTimeline />} />
          <Route path="/gsapStagger" element={<GsapStagger />} />
          <Route path="/scrollTrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsapText" element={<GsapText />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

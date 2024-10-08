import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
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
  ApplePage,
} from "./pages";
import { SiteNavigation } from "./components";
function App() {
  const location = useLocation();
  const showNavigation = location.pathname !== "/";
  return (
    <main>
      {showNavigation && <SiteNavigation />}
      <Routes>
        <Route path="/" element={<ApplePage />} />
        <Route path="/apple" element={<ApplePage />} />
        <Route path="/gsap" element={<GsapMainPage />} />
        <Route path="/gsapTo" element={<GsapTo />} />
        <Route path="/gsapFrom" element={<GsapFrom />} />
        <Route path="/gsapFromTo" element={<GsapToFrom />} />
        <Route path="/gsapTimeline" element={<GsapTimeline />} />
        <Route path="/gsapStagger" element={<GsapStagger />} />
        <Route path="/scrollTrigger" element={<GsapScrollTrigger />} />
        <Route path="/gsapText" element={<GsapText />} />
      </Routes>
    </main>
  );
}

// Router setup
const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;

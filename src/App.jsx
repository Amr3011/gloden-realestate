import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NavbarMainPage from "./pages/MainPage/NavbarMainPage/NavbarMainPage";
import ProjectDetails from "./pages/ProjectsPage/ProjectDetailPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <NavbarMainPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

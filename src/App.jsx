import { Routes, Route } from "react-router-dom";

import ProjectsPage from "./components/pageProject";
import Home from "./components/home/Home";

export default function App() {
  return (
    <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<ProjectsPage />} />

    </Routes>
  );
}

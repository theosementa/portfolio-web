import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from './contact/views/Contact';
import { Navbar } from './core/components/Navbar';
import { Home } from './home/views/Home';
import { ProjectDetail } from "./projects/views/ProjectDetail";
import { ProjectsView } from "./projects/views/ProjectsView";
import './styles/App.css';
import ScrollToAnchor from "./utils/ScrollToAnchor";

function App() {
  return (
    <BrowserRouter basename="/portfolio-web">
      <ScrollToAnchor />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsView />}></Route>
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from './contact/views/Contact';
import { Navbar } from './core/components/Navbar';
import { Home } from './home/views/Home';
import { ProjectDetail } from "./projects/views/ProjectDetail";
import { Projects } from "./projects/views/Projects";
import './styles/App.css';
import ScrollToAnchor from "./utils/ScrollToAnchor";

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Navbar />
      <div className="p-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

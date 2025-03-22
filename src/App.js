import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProjectsGallery from './components/ProjectsGallery';
import MoreProjects from './components/MoreProjects';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/projects-gallery' element={<ProjectsGallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/more-projects/:id' element={<MoreProjects />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;

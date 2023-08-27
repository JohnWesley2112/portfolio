import './App.css';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Layout route

import ProjectOne from './components/projects/ProjectOne'
import ProjectTwo from './components/projects/ProjectTwo'
import ProjectThree from './components/projects/ProjectThree'
import ProjectFour from './components/projects/ProjectFour'
import ProjectFive from './components/projects/ProjectFive'

// Animate On Scroll 
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} >
          <Route path='projectone' element={<ProjectOne />} />
          <Route path='projecttwo' element={<ProjectTwo />} />
          <Route path='projectthree' element={<ProjectThree />} />
          <Route path='projectfour' element={<ProjectFour />} />
          <Route path='projectfive' element={<ProjectFive />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
</Routes> */
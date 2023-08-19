import './App.css';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Projects from './components/pages/Projects';
// import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
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
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/contact" element={<Contacts />} />
      //   <Route path="/about" element={<About />} />
      //   <Route path="/projects" element={<Projects />} />
      // </Routes>
      // <Footer />
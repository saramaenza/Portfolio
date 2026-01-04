import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="App scroll-smooth">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;

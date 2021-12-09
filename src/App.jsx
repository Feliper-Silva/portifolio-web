import React from 'react';
import About from './components/about';
import Navbar from './components/header';
import Home from './components/main';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

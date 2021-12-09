import React from 'react';
import About from './components/about/index.jsx';
import Navbar from './components/header/index.jsx';
import Home from './components/main/index.jsx';
import Skills from './components/skills/index.jsx';
import Projects from './components/projects/index.jsx';
import Contact from './components/contact/index.jsx';
import Footer from './components/footer/index.jsx';

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

import React from 'react';
import About from './components/About/index.jsx';
import Navbar from './components/Header/index.jsx';
import Home from './components/Home/index.jsx';
import Skills from './components/Skills/index.jsx';
import Projects from './components/Projects/index.jsx';
import Footer from './components/Footer/index.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default App;

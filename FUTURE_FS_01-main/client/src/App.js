import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3B82F6',
      },
      secondary: {
        main: '#6366F1',
      },
      background: {
        default: darkMode ? '#1E293B' : '#F8FAFC',
        paper: darkMode ? '#1F2937' : '#FFFFFF',
      },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
    },
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className={`min-h-screen ${darkMode ? 'dark' : 'light'}`}>
          <Header darkMode={darkMode} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Projects />
            <Education />
            <Skills />
            <Contact />
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

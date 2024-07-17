import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Contactuspage from './pages/contactuspage';
import Fotter from './components/fotter';
import Home from './pages/Home';
import { RefsProvider } from './Refcontex'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <RefsProvider>
        <Navbar />
        <AnimatePresence mode="wait">
          {isLoading ? <Loader /> : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contactus" element={<Contactuspage />} />
            </Routes>
          )}
        </AnimatePresence>
        <Fotter />
      </RefsProvider>
    </Router>
  );
}

export default App;

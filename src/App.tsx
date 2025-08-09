import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans overflow-x-hidden relative">
        {/* Animated background gradient */}
        <div 
          className="fixed inset-0 opacity-50 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`
          }}
        />
        
        <Navbar mousePosition={mousePosition} />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                isScrolling={isScrolling}
                setIsScrolling={setIsScrolling}
              />
            } 
          />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import TokenomicsPage from './pages/TokenomicsPage';
import ConnectPage from './pages/ConnectPage';
import WhitepaperPage from './pages/WhitepaperPage';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  
  const isWhitepaperPage = location.pathname === '/testwp';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update CSS custom properties for footer cursor effect
      document.documentElement.style.setProperty('--mouse-x', `${(e.clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${(e.clientY / window.innerHeight) * 100}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans overflow-x-hidden relative">
      {/* Animated background gradient */}
      {!isWhitepaperPage && (
        <div 
          className="fixed inset-0 opacity-50 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`
          }}
        />
      )}
      
      {!isWhitepaperPage && <Navbar mousePosition={mousePosition} activeSection={activeSection} />}
      
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
        <Route path="/tokenomics" element={<TokenomicsPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/testwp" element={<WhitepaperPage />} />
      </Routes>
      
      {!isWhitepaperPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
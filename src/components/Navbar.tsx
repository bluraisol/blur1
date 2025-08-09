import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, Info, Phone, DollarSign } from 'lucide-react';

interface NavbarProps {
  mousePosition: { x: number; y: number };
}

export default function Navbar({ mousePosition }: NavbarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveSection = () => {
    if (currentPath === '/pricing') return 'pricing';
    // For home page, we'll need to pass this from parent
    return 'home';
  };

  const activeSection = getActiveSection();

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/50">
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 opacity-50 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`
        }}
      />
      
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo - Left Side */}
        <Link to="/" className="flex items-center space-x-6 min-w-[200px]">
          <img 
            src="/logo.png" 
            alt="Blur Logo" 
            className="w-16 h-16 rounded-lg shadow-xl shadow-blue-500/40 object-cover ring-1 ring-blue-500/20"
          />
          <span className="text-2xl font-bold tracking-tight text-neutral-100 drop-shadow-sm">Blur</span>
        </Link>
        
        {/* Centered Navigation Tabs */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <div className="relative flex items-center w-full max-w-2xl">
            {/* Glowing background track */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 via-neutral-800/30 to-neutral-900/50 rounded-full border border-neutral-700/50 backdrop-blur-sm" />
            
            {/* Animated active indicator */}
            <div 
              className={`absolute h-14 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-500 ease-out transform ${
                activeSection === 'home' ? 'translate-x-0 w-1/5' :
                activeSection === 'metrics' ? 'translate-x-full w-1/5' :
                activeSection === 'about' ? 'translate-x-[200%] w-1/5' :
                activeSection === 'pricing' ? 'translate-x-[300%] w-1/5' :
                'translate-x-[400%] w-1/5'
              }`}
            />
            
            {/* Pulsing glow effect */}
            <div 
              className={`absolute h-14 bg-blue-400/10 rounded-full transition-all duration-500 ease-out animate-pulse ${
                activeSection === 'home' ? 'translate-x-0 w-1/5' :
                activeSection === 'metrics' ? 'translate-x-full w-1/5' :
                activeSection === 'about' ? 'translate-x-[200%] w-1/5' :
                activeSection === 'pricing' ? 'translate-x-[300%] w-1/5' :
                'translate-x-[400%] w-1/5'
              }`}
            />
            
            {/* Navigation Items */}
            <div className="relative z-10 flex w-full">
              <Link 
                to="/"
                className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 text-base font-medium transition-all duration-300 ease-out cursor-pointer group ${
                  activeSection === 'home' 
                    ? 'text-white drop-shadow-sm transform scale-105' 
                    : 'text-neutral-400 hover:text-neutral-200 hover:scale-105'
                }`}
              >
                <Home className={`w-5 h-5 transition-all duration-300 ${
                  activeSection === 'home' ? 'text-blue-400' : 'group-hover:text-blue-400'
                }`} />
                <span>Home</span>
              </Link>
              
              <a 
                href="/#metrics"
                className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 text-base font-medium transition-all duration-300 ease-out cursor-pointer group ${
                  activeSection === 'metrics' 
                    ? 'text-white drop-shadow-sm transform scale-105' 
                    : 'text-neutral-400 hover:text-neutral-200 hover:scale-105'
                }`}
              >
                <BarChart3 className={`w-5 h-5 transition-all duration-300 ${
                  activeSection === 'metrics' ? 'text-blue-400' : 'group-hover:text-blue-400'
                }`} />
                <span>Metrics</span>
              </a>
              
              <a 
                href="/#about"
                className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 text-base font-medium transition-all duration-300 ease-out cursor-pointer group ${
                  activeSection === 'about' 
                    ? 'text-white drop-shadow-sm transform scale-105' 
                    : 'text-neutral-400 hover:text-neutral-200 hover:scale-105'
                }`}
              >
                <Info className={`w-5 h-5 transition-all duration-300 ${
                  activeSection === 'about' ? 'text-blue-400' : 'group-hover:text-blue-400'
                }`} />
                <span>About</span>
              </a>
              
              <Link 
                to="/pricing"
                className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 text-base font-medium transition-all duration-300 ease-out cursor-pointer group ${
                  activeSection === 'pricing' 
                    ? 'text-white drop-shadow-sm transform scale-105' 
                    : 'text-neutral-400 hover:text-neutral-200 hover:scale-105'
                }`}
              >
                <DollarSign className={`w-5 h-5 transition-all duration-300 ${
                  activeSection === 'pricing' ? 'text-blue-400' : 'group-hover:text-blue-400'
                }`} />
                <span>Pricing</span>
              </Link>
              
              <a 
                href="/#contact"
                className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 text-base font-medium transition-all duration-300 ease-out cursor-pointer group ${
                  activeSection === 'contact' 
                    ? 'text-white drop-shadow-sm transform scale-105' 
                    : 'text-neutral-400 hover:text-neutral-200 hover:scale-105'
                }`}
              >
                <Phone className={`w-5 h-5 transition-all duration-300 ${
                  activeSection === 'contact' ? 'text-blue-400' : 'group-hover:text-blue-400'
                }`} />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side spacer for balance */}
        <div className="w-32"></div>
      </nav>
    </header>
  );
}
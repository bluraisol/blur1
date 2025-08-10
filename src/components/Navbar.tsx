import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, BarChart3, Info, Phone, DollarSign, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  mousePosition: { x: number; y: number };
  activeSection?: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  type: 'route' | 'anchor';
  path: string;
  requiresHomePage?: boolean;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home, type: 'route', path: '/' },
  { id: 'metrics', label: 'Metrics', icon: BarChart3, type: 'anchor', path: '#metrics', requiresHomePage: true },
  { id: 'about', label: 'About', icon: Info, type: 'anchor', path: '#about', requiresHomePage: true },
  { id: 'pricing', label: 'Pricing', icon: DollarSign, type: 'route', path: '/pricing' },
  { id: 'tokenomics', label: 'Tokenomics', icon: FileText, type: 'route', path: '/tokenomics' },
  { id: 'contact', label: 'Contact', icon: Phone, type: 'anchor', path: '#contact', requiresHomePage: true }
];

export default function Navbar({ mousePosition, activeSection = 'home' }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentActiveItem, setCurrentActiveItem] = useState('home');

  // Determine current active item based on route and section
  const determineActiveItem = useCallback(() => {
    const currentPath = location.pathname;
    
    // Handle route-based pages
    if (currentPath === '/pricing') return 'pricing';
    if (currentPath === '/tokenomics') return 'tokenomics';
    
    // Handle home page sections
    if (currentPath === '/') {
      return activeSection || 'home';
    }
    
    return 'home';
  }, [location.pathname, activeSection]);

  useEffect(() => {
    setCurrentActiveItem(determineActiveItem());
  }, [determineActiveItem]);

  // Handle navigation clicks
  const handleNavClick = useCallback((item: NavItem, event: React.MouseEvent) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (item.type === 'route') {
      // Handle route navigation
      navigate(item.path);
    } else if (item.type === 'anchor') {
      // Handle anchor navigation
      if (item.requiresHomePage && location.pathname !== '/') {
        // Navigate to home page first, then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.path);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          }
        }, 100);
      } else {
        // Direct scroll on current page
        const element = document.querySelector(item.path);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    }
  }, [navigate, location.pathname]);

  // Calculate active indicator position
  const getActiveIndicatorStyle = () => {
    const activeIndex = navItems.findIndex(item => item.id === currentActiveItem);
    const translateX = activeIndex * (100 / navItems.length);
    const width = 100 / navItems.length;
    
    return {
      transform: `translateX(${translateX}%)`,
      width: `${width}%`
    };
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, item: NavItem) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavClick(item, event as any);
    }
  }, [handleNavClick]);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/50">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />
      
      <nav className="max-w-7xl mx-auto px-6 py-4 relative" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <Link 
            to="/" 
            className="flex items-center space-x-6 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-lg"
            aria-label="Blur - Home"
          >
            <img 
              src="/logo.png" 
              alt="Blur Logo" 
              className="w-16 h-16 rounded-lg shadow-xl shadow-blue-500/40 object-cover ring-1 ring-blue-500/20"
            />
            <span className="text-2xl font-bold tracking-tight text-neutral-100 drop-shadow-sm">
              Blur
            </span>
          </Link>
          
          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="relative flex items-center">
              {/* Background track */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 via-neutral-800/30 to-neutral-900/50 rounded-full border border-neutral-700/50 backdrop-blur-sm" />
              
              {/* Active indicator */}
              <div 
                className="absolute h-14 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-500 ease-out"
                style={getActiveIndicatorStyle()}
              />
              
              {/* Pulsing glow effect */}
              <div 
                className="absolute h-14 bg-blue-400/10 rounded-full transition-all duration-500 ease-out animate-pulse"
                style={getActiveIndicatorStyle()}
              />
              
              {/* Navigation Items */}
              <div className="relative z-10 flex">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = item.id === currentActiveItem;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={(e) => handleNavClick(item, e)}
                      onKeyDown={(e) => handleKeyDown(e, item)}
                      className={`flex items-center justify-center space-x-2 py-4 px-4 text-sm font-medium transition-all duration-300 ease-out cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg ${
                        isActive 
                          ? 'text-white drop-shadow-sm' 
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                      style={{ width: `${100 / navItems.length}%` }}
                      aria-current={isActive ? 'page' : undefined}
                      role="menuitem"
                    >
                      <IconComponent className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                      }`} />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-lg"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          
          {/* Right side spacer for balance */}
          <div className="hidden lg:block w-32"></div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/50 transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
          role="menu"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = item.id === currentActiveItem;
              
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(item, e)}
                  onKeyDown={(e) => handleKeyDown(e, item)}
                  className={`w-full flex items-center space-x-3 py-3 px-4 text-sm font-medium transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-lg ${
                    isActive 
                      ? 'text-white bg-blue-500/10 border border-blue-500/20' 
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/30'
                  }`}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <IconComponent className={`w-5 h-5 transition-all duration-200 ${
                    isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                  }`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
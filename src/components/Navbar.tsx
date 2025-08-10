import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, BarChart3, Info, Phone, DollarSign, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  mousePosition: { x: number; y: number };
  activeSection?: string;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home, type: 'anchor', path: '/#home' },
  { id: 'metrics', label: 'Metrics', icon: BarChart3, path: '/#metrics', type: 'anchor' },
  { id: 'about', label: 'About', icon: Info, path: '/#about', type: 'anchor' },
  { id: 'pricing', label: 'Pricing', icon: DollarSign, path: '/pricing', type: 'route' },
  { id: 'tokenomics', label: 'Tokenomics', icon: FileText, type: 'route', path: '/tokenomics' },
  { id: 'contact', label: 'Contact', icon: Phone, path: '/#contact', type: 'anchor' }
];

export default function Navbar({ mousePosition, activeSection = 'home' }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState('home');

  const setActiveItem = (itemId: string) => {
    setCurrentActive(itemId);
  };

  // Определяем активную вкладку
  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/') {
      setCurrentActive(activeSection);
    } else if (path === '/pricing') {
      setCurrentActive('pricing');
    } else if (path === '/tokenomics') {
      setCurrentActive('tokenomics');
    } else {
      setCurrentActive('home');
    }
  }, [location.pathname, activeSection]);

  // Обработка клика по навигации
  const handleNavClick = (item: typeof navigationItems[0]) => {
    setIsMobileMenuOpen(false);
    
    if (item.type === 'route') {
      navigate(item.path);
      // Прокрутка к началу страницы при переходе на новую страницу
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (item.id === 'home') {
        setActiveItem('home');
      }
      if (item.id === 'home') {
        setActiveItem('home');
      }
    } else {
      // Якорная ссылка
      if (location.pathname !== '/') {
        // Если не на главной странице, сначала переходим на главную
        navigate('/');
        setTimeout(() => {
          setActiveItem(item.id);
          const element = document.querySelector(item.path.replace('/#', '#'));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        setActiveItem(item.id);
        // Уже на главной странице, просто скроллим
        const element = document.querySelector(item.path.replace('/#', '#'));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Получаем индекс активного элемента
  const activeIndex = navigationItems.findIndex(item => item.id === currentActive);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/50">
      {/* Анимированный фон */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />
      
      <nav className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link 
            to="/" 
            className="flex items-center space-x-6 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-lg"
          >
            <img 
              src="/logo.png" 
              alt="Blur Logo" 
              className="w-16 h-16 rounded-lg shadow-xl shadow-blue-500/40 object-cover ring-1 ring-blue-500/20"
            />
            <span className="text-2xl font-bold tracking-tight text-neutral-100">
              Blur
            </span>
          </Link>
          
          {/* Десктопная навигация */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="relative flex items-center bg-gradient-to-r from-neutral-900/50 via-neutral-800/30 to-neutral-900/50 rounded-full border border-neutral-700/50 backdrop-blur-sm p-1">
              {/* Активный индикатор */}
              <div 
                className="absolute h-12 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-500 ease-out"
                style={{
                  width: `${100 / navigationItems.length}%`,
                  left: `${(activeIndex * 100) / navigationItems.length}%`,
                }}
              />
              
              {/* Навигационные элементы */}
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = item.id === currentActive;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`relative z-10 flex items-center justify-center space-x-2 py-3 px-3 text-sm font-medium transition-all duration-300 cursor-pointer group bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none active:outline-none ${
                      isActive 
                        ? 'text-white' 
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                    style={{ minWidth: `${100 / navigationItems.length}%` }}
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
          
          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Правый спейсер */}
          <div className="hidden lg:block w-32"></div>
        </div>
        
        {/* Мобильное меню */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/50 transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
        >
          <div className="px-6 py-4 space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = item.id === currentActive;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center space-x-3 py-3 px-4 text-sm font-medium transition-all duration-200 cursor-pointer group bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none active:outline-none rounded-lg ${
                    isActive 
                      ? 'text-white bg-blue-500/10 border border-blue-500/20' 
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/30'
                  }`}
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
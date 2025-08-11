import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  { id: 'contact', label: 'Connect', icon: Phone, path: '/#contact', type: 'anchor' },
];

export default function Navbar({ mousePosition, activeSection = 'home' }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState('home');

  // Определяем активную вкладку на основе текущего пути и секции
  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/') {
      setCurrentActive(activeSection);
    } else if (path === '/pricing') {
      setCurrentActive('pricing');
    } else if (path === '/tokenomics') {
      setCurrentActive('tokenomics');
    } else if (path === '/connect') {
      setCurrentActive('contact');
    } else {
      setCurrentActive('home');
    }
  }, [location.pathname, activeSection]);

  // Обработка клика по навигации
  const handleNavClick = (item: typeof navigationItems[0]) => {
    setIsMobileMenuOpen(false);
    
    if (item.type === 'route') {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Якорная ссылка
      if (location.pathname !== '/') {
        // Если не на главной странице, сначала переходим на главную
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.path.replace('/#', '#'));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Уже на главной странице, просто скроллим
        const element = document.querySelector(item.path.replace('/#', '#'));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Получаем индекс активного элемента для анимации
  const activeIndex = navigationItems.findIndex(item => item.id === currentActive);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/50">
      {/* Анимированный фон */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 100%)`
        }}
      />
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-3 flex-shrink-0 lg:flex-1">
            <img 
              src="/logo2.png" 
              alt="Blur Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl shadow-xl shadow-blue-500/40 object-cover ring-1 ring-blue-500/20"
            />
          </div>
          
          {/* Десктопная навигация */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="relative flex items-center bg-gradient-to-r from-neutral-900/50 via-neutral-800/30 to-neutral-900/50 rounded-2xl border border-neutral-700/50 backdrop-blur-sm p-1 max-w-4xl">
              {/* Активный индикатор */}
              <div 
                className="absolute h-12 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 rounded-xl border border-blue-400/30 shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-500 ease-out z-0"
                style={{
                  width: `calc(100% / ${navigationItems.length} - 4px)`,
                  left: `calc(${activeIndex} * (100% / ${navigationItems.length}) + 2px)`,
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
                    className={`relative z-10 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-all duration-300 cursor-pointer group bg-transparent border-none outline-none focus:outline-none rounded-lg min-w-0 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                    style={{ flex: '1 1 0%', minWidth: '140px' }}
                  >
                    <IconComponent className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                      isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                    }`} />
                    <span className="whitespace-nowrap text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Пустой блок для баланса */}
          <div className="hidden lg:block flex-1"></div>
          
          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-lg flex-shrink-0"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Мобильное меню */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/50 transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
        >
          <div className="px-4 sm:px-6 py-4 space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = item.id === currentActive;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center space-x-3 py-3 px-4 text-sm font-medium transition-all duration-200 cursor-pointer group bg-transparent border-none outline-none focus:outline-none rounded-lg text-left ${
                    isActive 
                      ? 'text-white bg-blue-500/10 border border-blue-500/20' 
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/30'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 flex-shrink-0 transition-all duration-200 ${
                    isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                  }`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
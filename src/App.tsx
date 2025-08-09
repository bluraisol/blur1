import React from 'react';
import { useState, useEffect } from 'react';
import { 
  Home, 
  BarChart3, 
  Info, 
  Phone, 
  Activity, 
  Scan, 
  TrendingUp, 
  Target, 
  Brain, 
  Zap, 
  Twitter, 
  MessageCircle, 
  Github 
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const fullText = 'Memecoin Scanner';

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeSection === 'home' && isLoaded) {
      // Start typewriter effect after initial animations
      const startDelay = 1500; // Wait for other animations to start
      
      const typewriterTimer = setTimeout(() => {
        setIsTyping(true);
        const words = fullText.split(' ');
        let currentIndex = 0;
        let currentWord = 0;
        
        // Faster initial typing with word-by-word reveal
        const typeInterval = setInterval(() => {
          if (currentWord < words.length) {
            const wordsToShow = words.slice(0, currentWord + 1);
            const currentWordText = wordsToShow[wordsToShow.length - 1];
            const previousWords = wordsToShow.slice(0, -1).join(' ');
            const currentProgress = currentIndex - (previousWords.length > 0 ? previousWords.length + 1 : 0);
            
            if (currentProgress <= currentWordText.length) {
              const displayText = previousWords + 
                (previousWords.length > 0 ? ' ' : '') + 
                currentWordText.slice(0, currentProgress);
              setTypewriterText(displayText);
              setCurrentWordIndex(currentWord);
            }
            
            currentIndex++;
            
            // Move to next word when current word is complete
            if (currentProgress > currentWordText.length) {
              currentWord++;
              // Add a pause between words
              if (currentWord < words.length) {
                setTimeout(() => {}, 150);
              }
            }
          } else {
            setIsTyping(false);
            clearInterval(typeInterval);
            
            // Enhanced cursor blinking with glow effect
            const cursorInterval = setInterval(() => {
              setShowCursor(prev => !prev);
            }, 600);
            return () => clearInterval(cursorInterval);
          }
        }, 80); // Faster typing speed
        
        return () => clearInterval(typeInterval);
      }, startDelay);
      
      return () => clearTimeout(typewriterTimer);
    } else {
      // Reset when leaving home section
      setTypewriterText('');
      setShowCursor(true);
      setIsTyping(false);
      setCurrentWordIndex(0);
    }

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
      
      const sections = ['home', 'metrics', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  const getTabWidth = (section: string) => {
    switch (section) {
      case 'home': return 'w-20';
      case 'metrics': return 'w-24';
      case 'about': return 'w-20';
      case 'contact': return 'w-24';
      default: return 'w-20';
    }
  };

  const getTabPosition = (section: string) => {
    switch (section) {
      case 'home': return 'left-0';
      case 'metrics': return 'left-20';
      case 'about': return 'left-44';
      case 'contact': return 'left-64';
      default: return 'left-0';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans overflow-x-hidden relative">
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`
        }}
      />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo - Left Side */}
          <div className="flex items-center space-x-4 min-w-[140px]">
            <img 
              src="/public/logo2.png" 
              alt="Blur Logo" 
              className="w-12 h-12 rounded-lg shadow-xl shadow-blue-500/40 object-cover ring-1 ring-blue-500/20"
            />
            <span className="text-2xl font-bold tracking-tight text-neutral-100 drop-shadow-sm">Blur</span>
            {/* <span className="text-2xl font-bold tracking-tight text-neutral-100 drop-shadow-sm">Blur</span> */}
          </div>
          
          {/* Centered Navigation Tabs */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <div className="relative flex items-center w-full max-w-2xl">
              {/* Glowing background track */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 via-neutral-800/30 to-neutral-900/50 rounded-full border border-neutral-700/50 backdrop-blur-sm" />
              
              {/* Animated active indicator */}
              <div 
                className={`absolute h-14 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-500 ease-out transform ${
                  activeSection === 'home' ? 'translate-x-0 w-1/4' :
                  activeSection === 'metrics' ? 'translate-x-full w-1/4' :
                  activeSection === 'about' ? 'translate-x-[200%] w-1/4' :
                  'translate-x-[300%] w-1/4'
                }`}
              />
              
              {/* Pulsing glow effect */}
              <div 
                className={`absolute h-14 bg-blue-400/10 rounded-full transition-all duration-500 ease-out animate-pulse ${
                  activeSection === 'home' ? 'translate-x-0 w-1/4' :
                  activeSection === 'metrics' ? 'translate-x-full w-1/4' :
                  activeSection === 'about' ? 'translate-x-[200%] w-1/4' :
                  'translate-x-[300%] w-1/4'
                }`}
              />
              
              {/* Navigation Items */}
              <div className="relative z-10 flex w-full">
                <button 
                  onClick={() => handleNavClick('home')}
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
                </button>
                
                <button 
                  onClick={() => handleNavClick('metrics')}
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
                </button>
                
                <button 
                  onClick={() => handleNavClick('about')}
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
                </button>
                
                <button 
                  onClick={() => handleNavClick('contact')}
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
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side spacer for balance */}
          <div className="w-20"></div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className={`relative pt-28 pb-40 transition-all duration-700 ease-out ${
        activeSection === 'home' && isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`max-w-5xl transition-all duration-1000 ease-out delay-100 ${
            activeSection === 'home' && isLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-60'
          }`}>
            <div className="mb-8">
              <div className={`inline-flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6 transition-all duration-1000 delay-200 ${
                activeSection === 'home' && isLoaded ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-4'
              }`}>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                <span>Next-Generation AI Technology</span>
              </div>
              
              <h1 className={`text-6xl md:text-8xl font-light leading-none tracking-tighter mb-8 transition-all duration-1000 delay-300 ${
                activeSection === 'home' && isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}>
                Advanced AI-Powered
                <br />
                <span className="relative text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">
                  {typewriterText}
                  <span className={`inline-block ml-1 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-blue-600 ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  } transition-all duration-200 ${
                    isTyping ? 'animate-pulse' : ''
                  } shadow-lg shadow-blue-500/50`}>
                  </span>
                  {/* Glow effect for active typing */}
                  {isTyping && (
                    <span className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-blue-500/30 to-blue-600/20 blur-sm animate-pulse rounded-lg"></span>
                  )}
                </span>
                <br />
                for Solana
              </h1>
              
              <p className={`text-xl text-neutral-400 max-w-3xl leading-relaxed font-light mb-12 transition-all duration-1000 delay-500 ${
                activeSection === 'home' && isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}>
                Blur leverages nine custom-built AI systems to analyze data from hundreds of thousands 
                of memecoins, delivering unparalleled insights and detection capabilities on the Solana network.
              </p>
            </div>
            
            <div className={`flex items-center space-x-6 transition-all duration-1000 delay-700 ${
              activeSection === 'home' && isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transform">
                Launch Scanner
              </button>
              <button className="border border-neutral-700 hover:border-blue-500/50 text-neutral-300 hover:text-white px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-lg hover:bg-blue-500/5 hover:scale-105 transform">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className={`relative py-40 transition-all duration-700 ease-out ${
        activeSection === 'metrics' ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`mb-16 transition-all duration-1000 ease-out ${
            activeSection === 'metrics' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-60'
          }`}>
            <div className="flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6">
              <Activity className="w-3 h-3 text-blue-500 animate-pulse" />
              <span>Live Performance Data</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">
              Real-Time <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Analytics</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl font-light">
              Monitor our AI scanner's performance with comprehensive metrics and live data streams
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ease-out delay-200 ${
            activeSection === 'metrics' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-60'
          }`}>
            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 p-6 hover:border-blue-500/30 transition-all duration-500 rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 transform group">
              <div className="flex items-center justify-between mb-4">
                <Scan className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">Live</span>
                </div>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Coins Detected</div>
              <div className="text-3xl font-light text-neutral-100 mb-1 group-hover:text-white transition-colors duration-300">847,562</div>
              <div className="text-xs text-blue-500 group-hover:text-blue-400 transition-colors duration-300">+12.5% today</div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 p-6 hover:border-blue-500/30 transition-all duration-500 rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 transform group">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">Live</span>
                </div>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Total Return</div>
              <div className="text-3xl font-light text-neutral-100 mb-1 group-hover:text-white transition-colors duration-300">2,847%</div>
              <div className="text-xs text-blue-500 group-hover:text-blue-400 transition-colors duration-300">+8.3% today</div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 p-6 hover:border-blue-500/30 transition-all duration-500 rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 transform group">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">Live</span>
                </div>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Average Return</div>
              <div className="text-3xl font-light text-neutral-100 mb-1 group-hover:text-white transition-colors duration-300">156%</div>
              <div className="text-xs text-blue-500 group-hover:text-blue-400 transition-colors duration-300">+15.7% today</div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 p-6 hover:border-blue-500/30 transition-all duration-500 rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 transform group">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">Live</span>
                </div>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Average Hit Rate</div>
              <div className="text-3xl font-light text-neutral-100 mb-1 group-hover:text-white transition-colors duration-300">87%</div>
              <div className="text-xs text-blue-500 group-hover:text-blue-400 transition-colors duration-300">+3.2% today</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`relative py-40 border-t border-neutral-800/30 transition-all duration-700 ease-out ${
        activeSection === 'about' ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ease-out ${
            activeSection === 'about' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-60'
          }`}>
            <div>
              <div className="flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6">
                <Brain className="w-3 h-3 text-blue-500 animate-pulse" />
                <span>Advanced AI Technology</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8">
                Nine Custom-Built <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">AI Systems</span>
              </h2>
              
              <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light">
                Our team has developed nine specialized AI systems that work in harmony to analyze 
                and scan memecoin data across the Solana ecosystem. Each AI is trained on unique 
                datasets and optimized for specific detection patterns.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-700/30 border border-neutral-700/50 flex items-center justify-center rounded-lg">
                    <Zap className="w-5 h-5 text-neutral-400" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-100 text-base">Lightning Fast</div>
                    <div className="text-neutral-500 text-sm">Real-time scanning and analysis</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-700/30 border border-neutral-700/50 flex items-center justify-center rounded-lg">
                    <Brain className="w-5 h-5 text-neutral-400" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-100 text-base">AI-Powered</div>
                    <div className="text-neutral-500 text-sm">Nine custom machine learning models</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-700/30 border border-neutral-700/50 flex items-center justify-center rounded-lg">
                    <BarChart3 className="w-5 h-5 text-neutral-400" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-100 text-base">Data-Driven</div>
                    <div className="text-neutral-500 text-sm">Hundreds of thousands of memecoin data points</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-neutral-900/30 to-neutral-800/20 border border-neutral-800/30 p-12 rounded-2xl backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-12 h-12 bg-gradient-to-br from-neutral-800/40 to-neutral-700/20 border border-neutral-700/30 flex items-center justify-center hover:border-blue-500/30 transition-all duration-500 rounded-lg hover:scale-110 transform hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div className="w-2 h-2 bg-neutral-600 rounded-full hover:bg-blue-400 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
                
                {/* Central AI hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 flex items-center justify-center rounded-xl shadow-lg shadow-blue-500/20">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                </div>
                
                {/* Connection lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full opacity-20">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    {[...Array(9)].map((_, i) => {
                      const angle = (i * 40) - 160;
                      const x1 = 50;
                      const y1 = 50;
                      const x2 = 50 + 30 * Math.cos(angle * Math.PI / 180);
                      const y2 = 50 + 30 * Math.sin(angle * Math.PI / 180);
                      return (
                        <line
                          key={i}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          stroke="url(#lineGradient)"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative border-t border-neutral-800/30 py-16 transition-all duration-700 ease-out opacity-100 transform translate-y-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 transition-all duration-1000 ease-out transform translate-y-0 opacity-100">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/public/logo2.png" 
                  alt="Blur Logo" 
                  className="w-8 h-8 rounded-lg shadow-lg shadow-blue-500/25 object-cover"
                />
                <span className="text-xl font-medium tracking-tight">Blur</span>
              </div>
              <p className="text-neutral-400 max-w-md text-base font-light leading-relaxed">
                Next-generation AI-powered memecoin scanner for the Solana ecosystem, 
                powered by nine custom-built artificial intelligence systems.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-300">Product</h3>
              <ul className="space-y-2 text-neutral-500">
                <li><a href="#" className="hover:text-neutral-300 transition-colors duration-200 text-sm">Scanner</a></li>
                <li><a href="#" className="hover:text-neutral-300 transition-colors duration-200 text-sm">Analytics</a></li>
                <li><a href="#" className="hover:text-neutral-300 transition-colors duration-200 text-sm">API Access</a></li>
                <li><a href="https://whitepaper.blur.ceo" className="hover:text-neutral-300 transition-colors duration-200 text-sm">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-300">Connect</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-700/30 hover:bg-blue-500/10 border border-neutral-700/50 hover:border-blue-500/30 flex items-center justify-center transition-all duration-300 rounded-lg hover:scale-110 transform hover:shadow-lg hover:shadow-blue-500/10">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-700/30 hover:bg-blue-500/10 border border-neutral-700/50 hover:border-blue-500/30 flex items-center justify-center transition-all duration-300 rounded-lg hover:scale-110 transform hover:shadow-lg hover:shadow-blue-500/10">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-700/30 hover:bg-blue-500/10 border border-neutral-700/50 hover:border-blue-500/30 flex items-center justify-center transition-all duration-300 rounded-lg hover:scale-110 transform hover:shadow-lg hover:shadow-blue-500/10">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-500 text-sm">© 2025 Blur AI. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-neutral-500 hover:text-blue-400 transition-colors duration-300 text-sm">Privacy Policy</a>
                <a href="#" className="text-neutral-500 hover:text-blue-400 transition-colors duration-300 text-sm">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Scan, 
  TrendingUp, 
  Target, 
  Brain, 
  Zap, 
  BarChart3 
} from 'lucide-react';

interface HomePageProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isScrolling: boolean;
  setIsScrolling: (scrolling: boolean) => void;
}

export default function HomePage({ activeSection, setActiveSection, isScrolling, setIsScrolling }: HomePageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
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
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setTypewriterText(fullText.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typeInterval);
            // Start blinking cursor
            const cursorInterval = setInterval(() => {
              setShowCursor(prev => !prev);
            }, 530);
            return () => clearInterval(cursorInterval);
          }
        }, 100);
        
        return () => clearInterval(typeInterval);
      }, startDelay);
      
      return () => clearTimeout(typewriterTimer);
    } else {
      // Reset when leaving home section
      setTypewriterText('');
      setShowCursor(true);
    }
  }, [activeSection, isLoaded, fullText]);

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
  }, [setActiveSection, setIsScrolling]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  return (
    <div className="min-h-screen">
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
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">
                  {typewriterText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
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
    </div>
  );
}
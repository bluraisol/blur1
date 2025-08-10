import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  
  const fullText = useMemo(() => 'Memecoin Scanner', []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeSection === 'home' && isLoaded) {
      const startDelay = 1500; // Wait for other animations to start
      
      const typewriterTimer = setTimeout(() => {
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setTypewriterText(fullText.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typeInterval);
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
      setTypewriterText('');
      setShowCursor(true);
    }
  }, [activeSection, isLoaded, fullText]);

  const handleScroll = useCallback(() => {
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
  }, [setActiveSection]);

  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const handleNavClick = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [setActiveSection]);

  // Memoized data arrays
  const metricsData = useMemo(() => [
    {
      icon: Scan,
      label: "Coins Detected",
      value: "847,562",
      change: "+12.5% today"
    },
    {
      icon: TrendingUp,
      label: "Total Return", 
      value: "2,847%",
      change: "+8.3% today"
    },
    {
      icon: BarChart3,
      label: "Average Return",
      value: "156%", 
      change: "+15.7% today"
    },
    {
      icon: Target,
      label: "Average Hit Rate",
      value: "87%",
      change: "+3.2% today"
    }
  ], []);

  const aiSystemsData = useMemo(() => [
    {
      percentage: "100%",
      name: "BLUR TWITTER (X) SCANNING AI",
      description: "Processes up to 100,000 posts per second to detect coin contract addresses shared by top influencers. Also scans high-performing tweets, analyzing engagement metrics and author verification credibility",
    },
    {
      percentage: "91.8%", 
      name: "BLUR DEX SCANNING AI",
      description: "Analyzes up to 30,000 coins per second, identifies coin metrics: liquidity, market capitalization, trading volume, percentage of holdings by the top 10 holders",
    },
    {
      percentage: "65.1%",
      name: "BLUR SUCCESS RATIO AI",
      description: "Calculates the success ratio of individual coins by evaluating traffic trends and overall popularity",
    },
    {
      percentage: "95.7%",
      name: "BLUR SOLSCAN AI", 
      description: "Process up to 30,000 coins per second, performs in-depth analysis of all smart contracts associated with tokens minted on the Wrapped Solana blockchain",
    },
    {
      percentage: "87.2%",
      name: "BLUR VALIDATION AI",
      description: "Serves as the final verification layer before a coin is sent to the Blur Bot on Telegram. It compiles data from all Blur AIs and outputs coins that meet all criteria",
    },
    {
      percentage: "98.4%",
      name: "BLUR TOKEN DISTRIBUTION AI",
      description: "Identifies Insiders, KOL/VC, Smart Holders, Whales, Phishing wallets in coins",
    },
    {
      percentage: "100%",
      name: "BLUR SMART HOLDER AI", 
      description: "Identifies Smart Holders in coins",
    },
    {
      percentage: "64.4%",
      name: "BLUR PHISHING AI",
      description: "Identifies wallets that have been associated with fraudulent coins or rugpulls",
    },
    {
      percentage: "70.4%",
      name: "BLUR RUG CHECK AI",
      description: "Rates Rugpull probability",
    }
  ], []);

  const processFlowData = useMemo(() => [
    {
      step: "1",
      title: "Detection",
      description: "Blur AI scans all new pairs (4-5 thousands every hour) and receives information about them directly from the Solana blockchain to speed up all processes as much as possible",
      borderGradient: "from-blue-500 to-blue-600"
    },
    {
      step: "2", 
      title: "Analysis",
      description: "Blur Validation AI collects all information from DEXs, Solscan, and Twitter, analyzes it using Blur Success Ratio AI, Blur Traffic AI, and Blur Smart Trader AI, checks the security of the coin, and sends the data to Blur Distributor AI",
      borderGradient: "from-blue-500 to-blue-600"
    },
    {
      step: "3",
      title: "Alert", 
      description: "Instant notifications (0.3 seconds) sent to Blur Bot in Telegram with detailed information about the coin",
      borderGradient: "from-blue-500 to-blue-600"
    },
    {
      step: "4",
      title: "Results",
      description: "Every Blur movement is recorded behind the scenes, statistics and token success rates are sent to the dashboard and immediately forwarded to the Blur Team for further AI training. Blur evolves with every call",
      borderGradient: "from-blue-500 to-blue-600"
    }
  ], []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className={`relative pt-28 pb-40 transition-opacity duration-500 ${
        activeSection === 'home' && isLoaded ? 'opacity-100' : 'opacity-70'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`max-w-5xl transition-opacity duration-700 ${
            activeSection === 'home' && isLoaded ? 'opacity-100' : 'opacity-60'
          }`}>
            <div className="mb-8">
              <div className={`inline-flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6 transition-opacity duration-500 ${
                activeSection === 'home' && isLoaded ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                <span>Next-Generation AI Technology</span>
              </div>
              
              <h1 className={`text-6xl md:text-8xl font-light leading-none tracking-tighter mb-8 transition-opacity duration-700 ${
                activeSection === 'home' && isLoaded ? 'opacity-100' : 'opacity-0'
              }`}>
                Advanced AI-Powered
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">
                  {typewriterText}
                  <span className={`text-4xl ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </span>
                <br />
                for Solana
              </h1>
              
              <p className={`text-xl text-neutral-400 max-w-3xl leading-relaxed font-light mb-12 transition-opacity duration-700 ${
                activeSection === 'home' && isLoaded ? 'opacity-100' : 'opacity-0'
              }`}>
                Blur leverages nine custom-built AI systems to analyze data from hundreds of thousands 
                of memecoins, delivering unparalleled insights and detection capabilities on the Solana network.
              </p>
            </div>
            
            <div className={`flex items-center space-x-6 transition-opacity duration-700 ${
              activeSection === 'home' && isLoaded ? 'opacity-100' : 'opacity-0'
            }`}>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                Launch Scanner
              </button>
              <button className="border border-neutral-700 hover:border-blue-500/50 text-neutral-300 hover:text-white px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 rounded-lg hover:bg-blue-500/5 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className={`relative py-40 transition-opacity duration-500 ${
        activeSection === 'metrics' ? 'opacity-100' : 'opacity-70'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`mb-16 transition-opacity duration-500 ${
            activeSection === 'metrics' ? 'opacity-100' : 'opacity-60'
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
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-500 ${
            activeSection === 'metrics' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-60'
          }`}>
            {metricsData.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 p-6 hover:border-blue-500/30 transition-all duration-200 rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 group">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors duration-200" />
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                      <span className="text-xs text-neutral-500 uppercase tracking-wider">Live</span>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">{metric.label}</div>
                  <div className="text-3xl font-light text-neutral-100 mb-1 group-hover:text-white transition-colors duration-200">{metric.value}</div>
                  <div className="text-xs text-blue-500 group-hover:text-blue-400 transition-colors duration-200">{metric.change}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`relative py-40 border-t border-neutral-800/30 transition-opacity duration-500 ${
        activeSection === 'about' ? 'opacity-100' : 'opacity-70'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`transition-opacity duration-500 ${
            activeSection === 'about' ? 'opacity-100' : 'opacity-60'
          }`}>
            <div className="flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6">
              <Brain className="w-3 h-3 text-blue-500" />
              <span>Advanced AI Technology</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8">
              Nine Custom-Built <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">AI Systems</span>
            </h2>
            
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light">
              Nine specialized AI models, each optimized for different aspects of memecoin analysis. 
              All Blur AI systems operate in parallel, allowing the entire evaluation process to be 
              completed in under one second.
            </p>
            
            {/* Central AI Hub Visualization */}
            <div className="relative max-w-6xl mx-auto">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-blue-500/20"></div>
                  ))}
                </div>
              </div>
              
              {/* Central Core */}
              <div className="relative z-10 flex items-center justify-center h-96">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-blue-600/20 border-2 border-blue-400/50 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* AI System Nodes */}
                {[
                  { name: "TWITTER AI", percentage: "100%", angle: 0, distance: 180 },
                  { name: "DEX AI", percentage: "91.8%", angle: 40, distance: 160 },
                  { name: "SUCCESS AI", percentage: "65.1%", angle: 80, distance: 170 },
                  { name: "SOLSCAN AI", percentage: "95.7%", angle: 120, distance: 165 },
                  { name: "VALIDATION AI", percentage: "87.2%", angle: 160, distance: 175 },
                  { name: "DISTRIBUTION AI", percentage: "98.4%", angle: 200, distance: 155 },
                  { name: "HOLDER AI", percentage: "100%", angle: 240, distance: 180 },
                  { name: "PHISHING AI", percentage: "64.4%", angle: 280, distance: 170 },
                  { name: "RUG CHECK AI", percentage: "70.4%", angle: 320, distance: 165 }
                ].map((ai, index) => {
                  const x = Math.cos((ai.angle * Math.PI) / 180) * ai.distance;
                  const y = Math.sin((ai.angle * Math.PI) / 180) * ai.distance;
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`
                      }}
                    >
                      {/* Connection Line */}
                      <div
                        className="absolute w-px bg-gradient-to-r from-blue-400/30 to-transparent origin-left group-hover:from-blue-400/60 transition-all duration-500"
                        style={{
                          height: `${ai.distance}px`,
                          transform: `rotate(${ai.angle + 180}deg)`,
                          transformOrigin: '0 0',
                          left: '50%',
                          top: '50%'
                        }}
                      />
                      
                      {/* AI Node */}
                      <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 border border-neutral-700/50 group-hover:border-blue-400/50 rounded-xl p-3 backdrop-blur-sm transition-all duration-200 group-hover:scale-110">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-400 mb-1">{ai.percentage}</div>
                          <div className="text-xs text-neutral-300 font-medium uppercase tracking-wider whitespace-nowrap">{ai.name}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Detailed AI Systems List */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiSystemsData.map((ai, index) => (
                <div key={index} className={`group bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 hover:border-blue-500/30 p-6 rounded-xl backdrop-blur-sm transition-all duration-200 hover:scale-105 ${
                  activeSection === 'about' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-200">{ai.percentage}</div>
                  </div>
                  <div className="font-medium text-neutral-100 text-sm mb-3 uppercase tracking-wider group-hover:text-white transition-colors duration-200">{ai.name}</div>
                  
                  <div className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">{ai.description}</div>
                </div>
              ))}
            </div>
            
            {/* Process Flow Section */}
            <div className="mt-32">
              <div className={`mb-16 transition-opacity duration-500 ${
                activeSection === 'about' ? 'opacity-100' : 'opacity-60'
              }`}>
                <div className="flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                  <span>Process Flow</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">
                  How <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Blur Works</span>
                </h3>
                <p className="text-lg text-neutral-400 max-w-3xl font-light">
                  How Blur's AI engine identifies and alerts you to profitable memecoin opportunities
                </p>
              </div>
              
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative transition-opacity duration-500 ${
                activeSection === 'about' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-60'
              }`}>
                {processFlowData.map((step, index) => (
                  <div key={index} className={`relative group transition-all duration-200 hover:scale-105 ${
                    activeSection === 'about' ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Step Number Badge */}
                    <div className={`absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r ${step.borderGradient} rounded-full flex items-center justify-center z-10 shadow-lg`}>
                      <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-400">{step.step}</span>
                      </div>
                    </div>
                    
                    {/* Connecting Arrow (Desktop only) */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                        <div className="absolute -right-1 -top-1 w-2 h-2 bg-blue-400/50 rotate-45 transform"></div>
                      </div>
                    )}
                    
                    <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 group-hover:border-neutral-700/50 p-6 rounded-xl backdrop-blur-sm transition-all duration-200 h-full">
                      <div className="relative z-10">
                        {/* Title */}
                        <h4 className="text-xl font-semibold text-neutral-100 mb-3 group-hover:text-white transition-colors duration-200">
                          {step.title}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
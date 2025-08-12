import React from 'react';
import { FileText, Brain, Activity, Target, Shield, Zap, TrendingUp, Users, Globe, Lock } from 'lucide-react';

export default function WhitepaperPage() {
  const tableOfContents = [
    { id: 'abstract', title: 'Abstract', level: 1 },
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'problem', title: 'The Problem', level: 1 },
    { id: 'solution', title: 'Our Solution', level: 1 },
    { id: 'official-contacts', title: 'Official Contacts', level: 1 },
    { id: 'subscription-policy', title: 'Subscription Policy', level: 1 },
    { id: 'investment-policy', title: 'Investment Policy', level: 1 },
    { id: 'operating-principle', title: 'Operating Principle', level: 1 },
    { id: 'architecture', title: 'Technical Architecture', level: 1 },
    { id: 'ai-systems', title: 'AI Systems Overview', level: 2 },
    { id: 'data-flow', title: 'Data Flow & Processing', level: 2 },
    { id: 'tokenomics', title: 'Tokenomics', level: 1 },
    { id: 'roadmap', title: 'Roadmap', level: 1 },
    { id: 'team', title: 'Team', level: 1 },
    { id: 'conclusion', title: 'Conclusion', level: 1 }
  ];

  const aiSystems = [
    {
      name: 'BLUR TWITTER (X) SCANNING AI',
      accuracy: '100%',
      description: 'Processes up to 100,000 posts per second to detect coin contract addresses shared by top influencers. Analyzes engagement metrics and author verification credibility.',
      icon: Globe
    },
    {
      name: 'BLUR DEX SCANNING AI',
      accuracy: '91.8%',
      description: 'Analyzes up to 30,000 coins per second, identifies coin metrics: liquidity, market capitalization, trading volume, percentage of holdings by the top 10 holders.',
      icon: TrendingUp
    },
    {
      name: 'BLUR SUCCESS RATIO AI',
      accuracy: '65.1%',
      description: 'Calculates the success ratio of individual coins by evaluating traffic trends and overall popularity.',
      icon: Target
    },
    {
      name: 'BLUR SOLSCAN AI',
      accuracy: '95.7%',
      description: 'Process up to 30,000 coins per second, performs in-depth analysis of all smart contracts associated with tokens minted on the Wrapped Solana blockchain.',
      icon: Shield
    },
    {
      name: 'BLUR VALIDATION AI',
      accuracy: '87.2%',
      description: 'Serves as the final verification layer before a coin is sent to the Blur Bot on Telegram. Compiles data from all Blur AIs and outputs coins that meet all criteria.',
      icon: Lock
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 border-b border-neutral-800/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6">
            <FileText className="w-3 h-3 text-blue-500" />
            <span>Technical Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tighter mb-8">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Blur</span> Whitepaper
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Revolutionary AI-powered Memecoin Scanner for Solana - Technical Documentation v1.0
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-neutral-500 mb-12">
            <span>Version 1.0</span>
            <span>•</span>
            <span>January 2025</span>
            <span>•</span>
            <span>Blur Team</span>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-200">
              <div className="text-3xl font-light text-blue-400 mb-2">9</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">AI Systems</div>
            </div>
            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-200">
              <div className="text-3xl font-light text-blue-400 mb-2">100K</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">Posts/Second</div>
            </div>
            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-200">
              <div className="text-3xl font-light text-blue-400 mb-2">30K</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">Tokens/Second</div>
            </div>
            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-200">
              <div className="text-3xl font-light text-blue-400 mb-2">0.3s</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">Alert Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-medium text-neutral-200 mb-6">Contents</h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-400 ${
                        item.level === 1 ? 'text-neutral-300 font-medium' : 'text-neutral-500 ml-4 text-xs'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4 space-y-20">
            
            {/* Abstract */}
            <section id="abstract" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">01</span>
                </div>
                <h2 className="text-3xl font-light text-neutral-200">Abstract</h2>
              </div>
              
              <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-neutral-300 leading-relaxed text-lg mb-6">
                  Blur represents a paradigm shift in cryptocurrency analysis, leveraging nine custom-built artificial intelligence systems to provide unprecedented insights into the Solana memecoin ecosystem.
                </p>
                <p className="text-neutral-300 leading-relaxed text-lg">
                  Our platform processes over 100,000 social media posts and analyzes up to 30,000 tokens per second, delivering real-time alerts and comprehensive market intelligence with sub-second latency.
                </p>
              </div>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">02</span>
                </div>
                <h2 className="text-3xl font-light text-neutral-200">Introduction</h2>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                  The cryptocurrency market, particularly the memecoin sector, moves at unprecedented speeds. Traditional analysis methods fail to capture the rapid emergence and evolution of new tokens, leaving investors without the tools necessary to identify profitable opportunities before they become mainstream.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-800/50 rounded-xl p-6">
                    <div className="text-4xl font-light text-green-400 mb-3">34,591x</div>
                    <div className="text-neutral-200 font-medium mb-2">Total Return Generated</div>
                    <div className="text-neutral-400 text-sm">Cumulative returns across all detected tokens</div>
                  </div>
                  <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-800/50 rounded-xl p-6">
                    <div className="text-4xl font-light text-blue-400 mb-3">61.2%</div>
                    <div className="text-neutral-200 font-medium mb-2">Success Rate</div>
                    <div className="text-neutral-400 text-sm">Average hit rate across all AI predictions</div>
                  </div>
                </div>
              </div>
            </section>

            {/* The Problem */}
            <section id="problem" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">03</span>
                </div>
                <h2 className="text-3xl font-light text-neutral-200">The Problem</h2>
              </div>
              
              <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                The memecoin market presents unique challenges that traditional analysis tools cannot address:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200">
                  <h4 className="text-neutral-200 font-medium mb-3 text-lg">Speed of Market Movement</h4>
                  <p className="text-neutral-400 leading-relaxed">Memecoins can gain or lose significant value within minutes, making manual analysis ineffective and costly.</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200">
                  <h4 className="text-neutral-200 font-medium mb-3 text-lg">Information Fragmentation</h4>
                  <p className="text-neutral-400 leading-relaxed">Critical data is scattered across multiple platforms, making comprehensive analysis time-consuming.</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200">
                  <h4 className="text-neutral-200 font-medium mb-3 text-lg">Lack of Early Detection</h4>
                  <p className="text-neutral-400 leading-relaxed">Most tools only identify opportunities after significant price movements have already occurred.</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200">
                  <h4 className="text-neutral-200 font-medium mb-3 text-lg">Security Concerns</h4>
                  <p className="text-neutral-400 leading-relaxed">High prevalence of rugpulls and fraudulent projects requires sophisticated security analysis.</p>
                </div>
              </div>
            </section>

            {/* Our Solution */}
            <section id="solution" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">04</span>
                </div>
                <h2 className="text-3xl font-light text-neutral-200">Our Solution</h2>
              </div>
              
              <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                Blur solves these challenges through a comprehensive AI-powered platform that combines real-time data processing, advanced pattern recognition, and predictive analytics to deliver actionable insights within seconds of market movements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8">
                  <h4 className="text-xl font-medium text-neutral-200 mb-4">AI-Powered Analysis</h4>
                  <p className="text-neutral-400 leading-relaxed">Nine specialized AI systems working in parallel to analyze different aspects of token performance and market sentiment with unprecedented accuracy.</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8">
                  <h4 className="text-xl font-medium text-neutral-200 mb-4">Real-Time Processing</h4>
                  <p className="text-neutral-400 leading-relaxed">Sub-second analysis and alert delivery, ensuring users receive information before market opportunities disappear into the mainstream.</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8">
                  <h4 className="text-xl font-medium text-neutral-200 mb-4">Security First</h4>
                  <p className="text-neutral-400 leading-relaxed">Advanced rugpull detection and phishing wallet identification to protect users from fraudulent projects and malicious actors.</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8">
                  <h4 className="text-xl font-medium text-neutral-200 mb-4">Comprehensive Coverage</h4>
                  <p className="text-neutral-400 leading-relaxed">Monitoring of all new token pairs on Solana, processing 4-5 thousand new tokens every hour with complete market coverage.</p>
                </div>
              </div>
            </section>

            {/* Technical Architecture */}
            <section id="architecture" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">05</span>
                </div>
                <h2 className="text-3xl font-light text-neutral-200">Technical Architecture</h2>
              </div>
              
              <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                Blur's architecture is built on a distributed system of specialized AI modules, each optimized for specific data sources and analysis types. The system operates on a four-stage pipeline: Detection, Analysis, Alert, and Results.
              </p>
              
              <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8">
                <h4 className="text-2xl font-light text-blue-400 mb-8 text-center">System Pipeline</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-400 font-bold text-lg">1</span>
                    </div>
                    <h5 className="font-medium text-neutral-200 mb-3 text-lg">Detection</h5>
                    <p className="text-neutral-400 text-sm leading-relaxed">Continuous monitoring of new token pairs and social media mentions across all platforms</p>
                    {/* Connection line */}
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  </div>
                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-400 font-bold text-lg">2</span>
                    </div>
                    <h5 className="font-medium text-neutral-200 mb-3 text-lg">Analysis</h5>
                    <p className="text-neutral-400 text-sm leading-relaxed">Multi-dimensional analysis using nine specialized AI systems working in parallel</p>
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  </div>
                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-400 font-bold text-lg">3</span>
                    </div>
                    <h5 className="font-medium text-neutral-200 mb-3 text-lg">Alert</h5>
                    <p className="text-neutral-400 text-sm leading-relaxed">Instant notifications delivered via Telegram bot with detailed analysis</p>
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-400 font-bold text-lg">4</span>
                    </div>
                    <h5 className="font-medium text-neutral-200 mb-3 text-lg">Results</h5>
                    <p className="text-neutral-400 text-sm leading-relaxed">Performance tracking and AI model improvement through continuous learning</p>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Systems Overview */}
            <section id="ai-systems" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">06</span>
                </div>
                <h3 className="text-2xl font-light text-neutral-200">AI Systems Overview</h3>
              </div>
              
              <div className="space-y-6">
                {aiSystems.map((system, index) => {
                  const IconComponent = system.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-neutral-800/50 border border-neutral-700/50 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-blue-400" />
                          </div>
                          <h4 className="font-medium text-neutral-200 text-lg">{system.name}</h4>
                        </div>
                        <div className="text-3xl font-light text-blue-400">{system.accuracy}</div>
                      </div>
                      <p className="text-neutral-400 leading-relaxed ml-16">{system.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Data Flow & Processing */}
            <section id="data-flow" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">07</span>
                </div>
                <h3 className="text-2xl font-light text-neutral-200">Data Flow & Processing</h3>
              </div>
              
              <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                Blur processes data from multiple sources simultaneously, creating a comprehensive view of each token's potential. The system handles massive data streams with enterprise-grade reliability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 rounded-lg border-l-2 border-blue-500/50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-neutral-200 font-medium">Social Media Data:</span>
                      <span className="text-neutral-300 ml-2">100,000+ posts per second from Twitter/X</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 rounded-lg border-l-2 border-blue-500/50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-neutral-200 font-medium">Blockchain Data:</span>
                      <span className="text-neutral-300 ml-2">Direct integration with Solana blockchain</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 rounded-lg border-l-2 border-blue-500/50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-neutral-200 font-medium">DEX Analytics:</span>
                      <span className="text-neutral-300 ml-2">Real-time trading data from multiple exchanges</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 rounded-lg border-l-2 border-blue-500/50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-neutral-200 font-medium">Smart Contract Analysis:</span>
                      <span className="text-neutral-300 ml-2">Automated security and functionality assessment</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">08</span>
                </div>
                <h2 className="text-3xl font-light text-neutral-200">Tokenomics</h2>
              </div>
              
              <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                The $BLUR token serves as the utility token for the Blur ecosystem, providing access to premium features, governance rights, and revenue sharing opportunities.
              </p>
              
              <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8">
                <h4 className="text-2xl font-light text-blue-400 mb-8 text-center">Token Distribution</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-light text-white mb-3">1B</div>
                    <div className="text-lg text-neutral-300 font-medium mb-2">Total Supply</div>
                    <div className="text-sm text-neutral-500">Fixed supply, no inflation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-light text-blue-400 mb-3">40%</div>
                    <div className="text-lg text-neutral-300 font-medium mb-2">Public Sale</div>
                    <div className="text-sm text-neutral-500">400M tokens for community</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-light text-blue-400 mb-3">10.5%</div>
                    <div className="text-lg text-neutral-300 font-medium mb-2">Airdrop</div>
                    <div className="text-sm text-neutral-500">105M tokens for early users</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">09</span>
                </div>
                <h2 className="text-3xl font-light text-neutral-200">Roadmap</h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="w-px h-16 bg-blue-500/30 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm">
                      <h4 className="text-xl font-medium text-neutral-200 mb-2">Q1 2025 - Platform Launch</h4>
                      <p className="text-neutral-400">Launch of Blur Telegram bot with core AI systems operational and initial user onboarding.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-500/50 rounded-full"></div>
                    <div className="w-px h-16 bg-neutral-700/30 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                      <h4 className="text-xl font-medium text-neutral-200 mb-2">Q2 2025 - Token Launch</h4>
                      <p className="text-neutral-400">$BLUR token launch and integration of premium features with staking mechanisms.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-neutral-600 rounded-full"></div>
                    <div className="w-px h-16 bg-neutral-700/30 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                      <h4 className="text-xl font-medium text-neutral-400 mb-2">Q3 2025 - Web Platform</h4>
                      <p className="text-neutral-500">Launch of comprehensive web dashboard and analytics platform with advanced features.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-neutral-600 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                      <h4 className="text-xl font-medium text-neutral-400 mb-2">Q4 2025 - Multi-Chain</h4>
                      <p className="text-neutral-500">Expansion to Ethereum and other blockchain networks with cross-chain analysis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Team */}
            <section id="team" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">10</span>
                </div>
                <h2 className="text-3xl font-light text-neutral-200">Team</h2>
              </div>
              
              <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                The Blur team consists of experienced professionals in artificial intelligence, blockchain technology, and financial markets, united by a vision to democratize access to advanced trading intelligence.
              </p>
              
              <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-8 h-8 text-blue-400" />
                  <h4 className="text-2xl font-light text-neutral-200">Core Team</h4>
                </div>
                <p className="text-neutral-400 leading-relaxed text-lg">
                  Our team includes AI researchers, blockchain developers, and trading professionals with combined experience of over 50 years in their respective fields. Team details will be revealed progressively as the project develops and reaches key milestones.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="scroll-mt-32">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">15</span>
                </div>
                <h2 className="text-3xl font-light text-neutral-200">Conclusion</h2>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                  Blur represents the next evolution in cryptocurrency analysis, combining cutting-edge artificial intelligence with comprehensive market data to provide users with unprecedented insights into the memecoin ecosystem.
                </p>
                <p className="text-neutral-300 leading-relaxed text-lg mb-12">
                  As the cryptocurrency market continues to evolve at an accelerating pace, tools like Blur become essential for investors seeking to capitalize on emerging opportunities while managing risk effectively.
                </p>
                
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-blue-500/20 rounded-2xl p-12 text-center backdrop-blur-sm">
                  <h4 className="text-3xl font-light text-blue-400 mb-6">Join the Revolution</h4>
                  <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                    Experience the power of AI-driven memecoin analysis and be part of the future of cryptocurrency trading intelligence.
                  </p>
                  <a 
                    href="https://t.me/BlurCryptoBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25"
                  >
                    <span className="text-lg">Get Started with Blur</span>
                  </a>
                </div>
                
                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-neutral-800/30 text-center">
                  <p className="text-neutral-500 text-sm">
                    All rights reserved. © Blur
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
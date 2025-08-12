import React from 'react';
import { FileText, Brain, Activity, Target, Shield, Zap, TrendingUp, Users, Globe, Lock } from 'lucide-react';

export default function WhitepaperPage() {
  const tableOfContents = [
    { id: 'abstract', title: 'Abstract', level: 1 },
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'problem', title: 'The Problem', level: 1 },
    { id: 'solution', title: 'Our Solution', level: 1 },
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-6">
            <FileText className="w-3 h-3 text-blue-500" />
            <span>Technical Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tighter mb-8">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Blur</span> Whitepaper
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            Revolutionary AI-powered Memecoin Scanner for Solana - Technical Documentation v1.0
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-8 text-sm text-neutral-500">
            <span>Version 1.0</span>
            <span>•</span>
            <span>January 2025</span>
            <span>•</span>
            <span>Blur Team</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="text-lg font-medium text-neutral-200 mb-6">Table of Contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-3 rounded-lg text-sm transition-colors duration-200 hover:bg-neutral-800/30 hover:text-white ${
                      item.level === 1 ? 'text-neutral-300 font-medium' : 'text-neutral-500 ml-4'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Abstract */}
            <section id="abstract" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Abstract</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Blur represents a paradigm shift in cryptocurrency analysis, leveraging nine custom-built artificial intelligence systems to provide unprecedented insights into the Solana memecoin ecosystem. Our platform processes over 100,000 social media posts and analyzes up to 30,000 tokens per second, delivering real-time alerts and comprehensive market intelligence.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  This whitepaper outlines the technical architecture, AI methodologies, and tokenomics that power Blur's revolutionary approach to memecoin discovery and analysis on the Solana blockchain.
                </p>
              </div>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Introduction</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed mb-6">
                  The cryptocurrency market, particularly the memecoin sector, moves at unprecedented speeds. Traditional analysis methods fail to capture the rapid emergence and evolution of new tokens, leaving investors without the tools necessary to identify profitable opportunities before they become mainstream.
                </p>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Blur addresses this challenge through advanced artificial intelligence, processing vast amounts of data from multiple sources including social media platforms, decentralized exchanges, and blockchain analytics to provide users with actionable insights in real-time.
                </p>
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 mt-8">
                  <h4 className="text-lg font-medium text-blue-400 mb-4">Key Statistics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-light text-white">11,928</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">Coins Detected</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-white">34,591x</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">Total Return</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-white">2.9x</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">Average Return</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-white">61.2%</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">Hit Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* The Problem */}
            <section id="problem" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-neutral-200 mb-8">The Problem</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed mb-6">
                  The memecoin market presents unique challenges that traditional analysis tools cannot address:
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-neutral-200 font-medium mb-2">Speed of Market Movement</h4>
                      <p className="text-neutral-400 text-sm">Memecoins can gain or lose significant value within minutes, making manual analysis ineffective.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-neutral-200 font-medium mb-2">Information Fragmentation</h4>
                      <p className="text-neutral-400 text-sm">Critical data is scattered across multiple platforms, making comprehensive analysis time-consuming.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-neutral-200 font-medium mb-2">Lack of Early Detection</h4>
                      <p className="text-neutral-400 text-sm">Most tools only identify opportunities after significant price movements have already occurred.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-neutral-200 font-medium mb-2">Security Concerns</h4>
                      <p className="text-neutral-400 text-sm">High prevalence of rugpulls and fraudulent projects requires sophisticated security analysis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Solution */}
            <section id="solution" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Our Solution</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed mb-8">
                  Blur solves these challenges through a comprehensive AI-powered platform that combines real-time data processing, advanced pattern recognition, and predictive analytics to deliver actionable insights within seconds of market movements.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                    <Brain className="w-8 h-8 text-blue-400 mb-4" />
                    <h4 className="text-lg font-medium text-neutral-200 mb-3">AI-Powered Analysis</h4>
                    <p className="text-neutral-400 text-sm">Nine specialized AI systems working in parallel to analyze different aspects of token performance and market sentiment.</p>
                  </div>
                  <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                    <Zap className="w-8 h-8 text-blue-400 mb-4" />
                    <h4 className="text-lg font-medium text-neutral-200 mb-3">Real-Time Processing</h4>
                    <p className="text-neutral-400 text-sm">Sub-second analysis and alert delivery, ensuring users receive information before market opportunities disappear.</p>
                  </div>
                  <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                    <Shield className="w-8 h-8 text-blue-400 mb-4" />
                    <h4 className="text-lg font-medium text-neutral-200 mb-3">Security First</h4>
                    <p className="text-neutral-400 text-sm">Advanced rugpull detection and phishing wallet identification to protect users from fraudulent projects.</p>
                  </div>
                  <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                    <Activity className="w-8 h-8 text-blue-400 mb-4" />
                    <h4 className="text-lg font-medium text-neutral-200 mb-3">Comprehensive Coverage</h4>
                    <p className="text-neutral-400 text-sm">Monitoring of all new token pairs on Solana, processing 4-5 thousand new tokens every hour.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Architecture */}
            <section id="architecture" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Technical Architecture</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed mb-8">
                  Blur's architecture is built on a distributed system of specialized AI modules, each optimized for specific data sources and analysis types. The system operates on a four-stage pipeline: Detection, Analysis, Alert, and Results.
                </p>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8">
                    <h4 className="text-xl font-medium text-blue-400 mb-6">System Pipeline</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-blue-400 font-bold">1</span>
                        </div>
                        <h5 className="font-medium text-neutral-200 mb-2">Detection</h5>
                        <p className="text-neutral-400 text-sm">Continuous monitoring of new token pairs and social media mentions</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-blue-400 font-bold">2</span>
                        </div>
                        <h5 className="font-medium text-neutral-200 mb-2">Analysis</h5>
                        <p className="text-neutral-400 text-sm">Multi-dimensional analysis using nine specialized AI systems</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-blue-400 font-bold">3</span>
                        </div>
                        <h5 className="font-medium text-neutral-200 mb-2">Alert</h5>
                        <p className="text-neutral-400 text-sm">Instant notifications delivered via Telegram bot</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-blue-400 font-bold">4</span>
                        </div>
                        <h5 className="font-medium text-neutral-200 mb-2">Results</h5>
                        <p className="text-neutral-400 text-sm">Performance tracking and AI model improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Systems Overview */}
            <section id="ai-systems" className="scroll-mt-32">
              <h3 className="text-2xl font-light text-neutral-200 mb-6">AI Systems Overview</h3>
              <div className="space-y-6">
                {aiSystems.map((system, index) => {
                  const IconComponent = system.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-neutral-800/50 border border-neutral-700/50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-neutral-200">{system.name}</h4>
                            <div className="text-2xl font-light text-blue-400">{system.accuracy}</div>
                          </div>
                          <p className="text-neutral-400 text-sm leading-relaxed">{system.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Data Flow & Processing */}
            <section id="data-flow" className="scroll-mt-32">
              <h3 className="text-2xl font-light text-neutral-200 mb-6">Data Flow & Processing</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Blur processes data from multiple sources simultaneously, creating a comprehensive view of each token's potential. The system handles:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300"><strong>Social Media Data:</strong> 100,000+ posts per second from Twitter/X</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300"><strong>Blockchain Data:</strong> Direct integration with Solana blockchain</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300"><strong>DEX Analytics:</strong> Real-time trading data from multiple exchanges</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300"><strong>Smart Contract Analysis:</strong> Automated security and functionality assessment</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Tokenomics</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed mb-8">
                  The $BLUR token serves as the utility token for the Blur ecosystem, providing access to premium features, governance rights, and revenue sharing opportunities.
                </p>
                
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8 mb-8">
                  <h4 className="text-xl font-medium text-blue-400 mb-6">Token Distribution</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-light text-white mb-2">1B</div>
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">Total Supply</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-white mb-2">40%</div>
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">Public Sale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-white mb-2">10.5%</div>
                      <div className="text-sm text-neutral-400 uppercase tracking-wider">Airdrop</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Roadmap</h2>
              <div className="space-y-8">
                <div className="border-l-2 border-blue-500/30 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="text-lg font-medium text-neutral-200 mb-2">Q1 2025 - Platform Launch</h4>
                  <p className="text-neutral-400 text-sm">Launch of Blur Telegram bot with core AI systems operational</p>
                </div>
                <div className="border-l-2 border-blue-500/30 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500/50 rounded-full"></div>
                  <h4 className="text-lg font-medium text-neutral-200 mb-2">Q2 2025 - Token Launch</h4>
                  <p className="text-neutral-400 text-sm">$BLUR token launch and integration of premium features</p>
                </div>
                <div className="border-l-2 border-neutral-700/30 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-neutral-600 rounded-full"></div>
                  <h4 className="text-lg font-medium text-neutral-400 mb-2">Q3 2025 - Web Platform</h4>
                  <p className="text-neutral-500 text-sm">Launch of comprehensive web dashboard and analytics platform</p>
                </div>
                <div className="border-l-2 border-neutral-700/30 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-neutral-600 rounded-full"></div>
                  <h4 className="text-lg font-medium text-neutral-400 mb-2">Q4 2025 - Multi-Chain</h4>
                  <p className="text-neutral-500 text-sm">Expansion to Ethereum and other blockchain networks</p>
                </div>
              </div>
            </section>

            {/* Team */}
            <section id="team" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Team</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed mb-8">
                  The Blur team consists of experienced professionals in artificial intelligence, blockchain technology, and financial markets, united by a vision to democratize access to advanced trading intelligence.
                </p>
                <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-blue-400" />
                    <h4 className="text-lg font-medium text-neutral-200">Core Team</h4>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    Our team includes AI researchers, blockchain developers, and trading professionals with combined experience of over 50 years in their respective fields. Team details will be revealed progressively as the project develops.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="scroll-mt-32">
              <h2 className="text-3xl font-light text-neutral-200 mb-8">Conclusion</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Blur represents the next evolution in cryptocurrency analysis, combining cutting-edge artificial intelligence with comprehensive market data to provide users with unprecedented insights into the memecoin ecosystem.
                </p>
                <p className="text-neutral-300 leading-relaxed mb-8">
                  As the cryptocurrency market continues to evolve at an accelerating pace, tools like Blur become essential for investors seeking to capitalize on emerging opportunities while managing risk effectively.
                </p>
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-8 text-center">
                  <h4 className="text-xl font-medium text-blue-400 mb-4">Join the Revolution</h4>
                  <p className="text-neutral-300 mb-6">Experience the power of AI-driven memecoin analysis</p>
                  <a 
                    href="https://t.me/BlurCryptoBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <span>Get Started with Blur</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
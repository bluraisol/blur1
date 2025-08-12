import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink, ArrowRight, Copy, Check, Menu, X, ChevronRight } from 'lucide-react';

export default function WhitepaperPage() {
  const navigate = useNavigate();
  const [copiedWallet, setCopiedWallet] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('contacts');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleTokenomicsRedirect = () => {
    navigate('/tokenomics');
  };

  const handleCopyWallet = async (wallet: string) => {
    try {
      await navigator.clipboard.writeText(wallet);
      setCopiedWallet(wallet);
      setTimeout(() => setCopiedWallet(''), 2000);
    } catch (err) {
      console.error('Failed to copy wallet:', err);
    }
  };

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const wallets = [
    { name: 'Tether USDT TRC-20 (TRX)', address: 'TGU8xcD3Qg8zn2pLxkc8zKVhV3QvGiFh8b', color: 'from-green-500/20 to-green-600/10' },
    { name: 'Solana (SOL)', address: 'Ckq7txJnC9xH3WkrkEheSYXbV8iqtwTD963gRCKvetET', color: 'from-purple-500/20 to-purple-600/10' },
    { name: 'Bitcoin (BTC)', address: 'bc1qsuepk6ktryym2n4a6z996qmm4t7a0y0s38yp5z', color: 'from-orange-500/20 to-orange-600/10' },
    { name: 'Ethereum (ETH)', address: '0xfe3A2437e0e0E3497C77924B5688d74B10bADEb6', color: 'from-blue-500/20 to-blue-600/10' }
  ];

  const navigationItems = [
    { id: 'contacts', title: 'Official Contacts', number: '01', icon: '🔗' },
    { id: 'subscription', title: 'Subscription Policy', number: '02', icon: '📋' },
    { id: 'investment', title: 'Investment Policy', number: '03', icon: '💰' },
    { id: 'operating', title: 'Operating Principle', number: '04', icon: '⚙️' },
    { id: 'tokenomics', title: 'Tokenomics', number: '05', icon: '🪙' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-800/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 h-16 bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/50 rounded-2xl z-40 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-neutral-800/50 rounded-xl transition-all duration-200"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/media/static/logo2.png" 
                  alt="Blur Logo" 
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-blue-500/30"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-neutral-900 animate-pulse" />
              </div>
              <div>
                <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  Blur Protocol
                </span>
                <div className="text-xs text-neutral-500">Technical Documentation</div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleGoHome}
            className="flex items-center space-x-2 px-4 py-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-xl transition-all duration-200 group"
          >
            <Home className="w-4 h-4 text-neutral-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm text-neutral-300 group-hover:text-white">Home</span>
          </button>
        </div>
      </header>

      <div className="flex pt-24">
        {/* Elegant Sidebar */}
        <aside className={`fixed inset-y-0 left-4 z-30 w-80 bg-gradient-to-b from-neutral-900/90 to-neutral-800/90 backdrop-blur-xl border border-neutral-800/50 rounded-2xl mt-24 mb-4 transform transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="p-6 h-full flex flex-col">
            <div className="mb-8">
              <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">Table of Contents</h3>
              <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>
            
            <nav className="flex-1 space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full group relative overflow-hidden rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/30'
                      : 'hover:bg-neutral-800/50 border border-transparent hover:border-neutral-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-4 p-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-500/20 border border-blue-500/30'
                        : 'bg-neutral-800/50 border border-neutral-700/50 group-hover:bg-neutral-700/50'
                    }`}>
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div className="flex-1 text-left">
                      <div className={`text-xs font-mono mb-1 transition-colors duration-300 ${
                        activeSection === item.id ? 'text-blue-400' : 'text-neutral-500'
                      }`}>
                        {item.number}
                      </div>
                      <div className={`font-medium transition-colors duration-300 ${
                        activeSection === item.id ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                      }`}>
                        {item.title}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-blue-400 transform rotate-90' 
                        : 'text-neutral-500 group-hover:text-neutral-300'
                    }`} />
                  </div>
                  
                  {activeSection === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-400 rounded-r-full" />
                  )}
                </button>
              ))}
            </nav>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div className="text-sm text-blue-300 font-medium mb-1">Quick Access</div>
              <div className="text-xs text-neutral-400">Jump to any section instantly</div>
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Premium Content Area */}
        <main className="flex-1 lg:ml-96 px-4">
          <div className="max-w-4xl mx-auto py-8">
            
            {/* Hero Section */}
            <div className="mb-20 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 mb-8">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Live Documentation</span>
              </div>
              
              <h1 className="text-5xl font-light mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Technical Documentation
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                Comprehensive guide to Blur Protocol's features, policies, and technical implementation
              </p>
            </div>

            {/* Official Contacts */}
            <section id="contacts" className="mb-24">
              <div className="flex items-center space-x-4 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl">
                  <span className="text-2xl">🔗</span>
                </div>
                <div>
                  <div className="text-sm font-mono text-blue-400 mb-1">01</div>
                  <h2 className="text-3xl font-light">Official Contacts</h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Channels */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-neutral-200 mb-6">Official Channels</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://t.me/blurconnect" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block relative overflow-hidden bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                            <span className="text-xl">📱</span>
                          </div>
                          <div>
                            <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">@blurconnect</div>
                            <div className="text-sm text-neutral-400">Technical support, FAQ, CEO</div>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </a>
                    
                    <a 
                      href="https://t.me/BlurCryptoBot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block relative overflow-hidden bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                            <span className="text-xl">🤖</span>
                          </div>
                          <div>
                            <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">@BlurCryptoBot</div>
                            <div className="text-sm text-neutral-400">Official Blur bot in Telegram</div>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Wallets */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-neutral-200 mb-6">Official Wallets</h3>
                  
                  <div className="space-y-4">
                    {wallets.map((wallet, index) => (
                      <div key={index} className={`relative overflow-hidden bg-gradient-to-r ${wallet.color} border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="font-medium text-white mb-1">{wallet.name}</div>
                            <div className="text-xs text-neutral-400">Official wallet address</div>
                          </div>
                          <button
                            onClick={() => handleCopyWallet(wallet.address)}
                            className="p-2 hover:bg-neutral-800/50 rounded-xl transition-all duration-200 group-hover:bg-neutral-700/50"
                          >
                            {copiedWallet === wallet.address ? 
                              <Check className="w-5 h-5 text-green-400" /> : 
                              <Copy className="w-5 h-5 text-neutral-400 hover:text-blue-400" />
                            }
                          </button>
                        </div>
                        <div className="bg-neutral-900/80 border border-neutral-800/50 rounded-xl p-4">
                          <code className="text-sm text-blue-300 font-mono break-all leading-relaxed">{wallet.address}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-xs text-neutral-500 bg-neutral-900/30 border border-neutral-800/30 rounded-xl p-4">
                    <span className="text-amber-400">⚠️</span> Wallets can be changed after staff agreement
                  </div>
                </div>
              </div>
            </section>

            {/* Subscription Policy */}
            <section id="subscription" className="mb-24">
              <div className="flex items-center space-x-4 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <div className="text-sm font-mono text-blue-400 mb-1">02</div>
                  <h2 className="text-3xl font-light">Subscription Policy</h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    title: "Subscription Duration",
                    content: "Minimum 1 month, lifetime subscriptions available. Duration discussed with technical support team.",
                    icon: "⏱️"
                  },
                  {
                    title: "Account Sharing Policy", 
                    content: "Subscription terminated without refund if shared with third parties. Message forwarding to chat rooms is allowed.",
                    icon: "🚫"
                  },
                  {
                    title: "Refund Policy",
                    content: "Refunds available for bot malfunctions or emergency situations (discussed with CEO).",
                    icon: "💸"
                  },
                  {
                    title: "Renewal Benefits",
                    content: "15% discount for returning customers. Free renewal for technical issues or emergencies.",
                    icon: "🎁"
                  },
                  {
                    title: "Referral System",
                    content: "15% commission + 10% lifetime discount for first referral, then 2% discount for each subsequent referral.",
                    icon: "🤝"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{item.title}</h4>
                        <p className="text-neutral-400 leading-relaxed text-sm">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Investment Policy */}
            <section id="investment" className="mb-24">
              <div className="flex items-center space-x-4 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <div className="text-sm font-mono text-blue-400 mb-1">03</div>
                  <h2 className="text-3xl font-light">Investment Policy</h2>
                </div>
              </div>
              
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-purple-500/10 border border-blue-500/30 rounded-3xl p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="text-6xl font-light text-blue-400">10%</div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-semibold text-blue-300 mb-2">Revenue Share Program</h4>
                      <p className="text-blue-200/80 leading-relaxed">
                        Investments of $7,000 or more receive 10% of all subscription revenue. 
                        All investment terms are discussed directly with the CEO.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-300/60">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span>Exclusive opportunity for qualified investors</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Operating Principle */}
            <section id="operating" className="mb-24">
              <div className="flex items-center space-x-4 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <div className="text-sm font-mono text-blue-400 mb-1">04</div>
                  <h2 className="text-3xl font-light">Operating Principle</h2>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    name: "Twitter (X) Scanning AI",
                    performance: "1M posts/sec",
                    description: "Processes posts to detect coin contracts from influencers, analyzes engagement metrics and verification status.",
                    color: "from-blue-500/20 to-blue-600/10"
                  },
                  {
                    name: "DEX Scanning AI", 
                    performance: "30K coins/sec",
                    description: "Analyzes liquidity, market cap, volume, holder distribution, insider holdings, and rug probability.",
                    color: "from-purple-500/20 to-purple-600/10"
                  },
                  {
                    name: "Success Ratio AI",
                    performance: "Real-time",
                    description: "Calculates success ratios, traffic trends, and overall coin popularity metrics.",
                    color: "from-green-500/20 to-green-600/10"
                  },
                  {
                    name: "Solscan AI",
                    performance: "30K coins/sec", 
                    description: "Deep analysis of smart contracts for tokens minted on Wrapped Solana blockchain.",
                    color: "from-orange-500/20 to-orange-600/10"
                  },
                  {
                    name: "Validation AI",
                    performance: "<1 second",
                    description: "Final verification layer that compiles data from all AIs before sending to Telegram bot.",
                    color: "from-cyan-500/20 to-cyan-600/10"
                  }
                ].map((ai, index) => (
                  <div key={index} className={`relative overflow-hidden bg-gradient-to-r ${ai.color} border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group`}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-white text-lg group-hover:text-blue-300 transition-colors">{ai.name}</h4>
                      <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-mono">
                        {ai.performance}
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{ai.description}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                  </div>
                ))}
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="mb-24">
              <div className="flex items-center space-x-4 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl">
                  <span className="text-2xl">🪙</span>
                </div>
                <div>
                  <div className="text-sm font-mono text-blue-400 mb-1">05</div>
                  <h2 className="text-3xl font-light">Blur Tokenomics</h2>
                </div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 rounded-3xl p-12 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="mb-8">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Detailed Token Distribution</h3>
                  <p className="text-neutral-400 max-w-md mx-auto">
                    Explore our comprehensive tokenomics model and distribution strategy
                  </p>
                </div>
                
                <button
                  onClick={handleTokenomicsRedirect}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  <span>View Detailed Tokenomics</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-12 border-t border-neutral-800/30">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <img 
                    src="/media/static/logo2.png" 
                    alt="Blur Logo" 
                    className="w-8 h-8 rounded-lg object-cover opacity-60"
                  />
                  <span className="text-neutral-500 text-sm">© 2025 Blur Protocol. All rights reserved.</span>
                </div>
                <div className="text-xs text-neutral-600">
                  Built with precision and attention to detail
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
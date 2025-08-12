import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink, ArrowRight, Copy, Check, Menu, X } from 'lucide-react';

export default function WhitepaperPage() {
  const navigate = useNavigate();
  const [copiedWallet, setCopiedWallet] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('contacts');

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

  const wallets = [
    { name: 'Tether USDT TRC-20 (TRX)', address: 'TGU8xcD3Qg8zn2pLxkc8zKVhV3QvGiFh8b' },
    { name: 'Solana (SOL)', address: 'Ckq7txJnC9xH3WkrkEheSYXbV8iqtwTD963gRCKvetET' },
    { name: 'Bitcoin (BTC)', address: 'bc1qsuepk6ktryym2n4a6z996qmm4t7a0y0s38yp5z' },
    { name: 'Ethereum (ETH)', address: '0xfe3A2437e0e0E3497C77924B5688d74B10bADEb6' }
  ];

  const navigationItems = [
    { id: 'contacts', title: 'Official Contacts', number: '01' },
    { id: 'subscription', title: 'Subscription Policy', number: '02' },
    { id: 'investment', title: 'Investment Policy', number: '03' },
    { id: 'operating', title: 'Operating Principle', number: '04' },
    { id: 'tokenomics', title: 'Tokenomics', number: '05' }
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
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      </div>

      {/* Luxury Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-r from-neutral-950/95 via-neutral-900/95 to-neutral-950/95 backdrop-blur-xl border-b border-gradient-to-r from-transparent via-blue-500/20 to-transparent z-50 shadow-2xl shadow-blue-500/10">
        <div className="flex items-center justify-between h-full px-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-3 hover:bg-blue-500/10 rounded-xl transition-all duration-300 border border-neutral-800/50 hover:border-blue-500/30"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-lg"></div>
                <img 
                  src="/media/static/logo2.png" 
                  alt="Blur Logo" 
                  className="relative w-12 h-12 rounded-2xl object-cover border border-blue-500/30 shadow-xl"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                  Blur Protocol
                </h1>
                <p className="text-xs text-neutral-400 font-medium">Technical Documentation</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleGoHome}
            className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-500/30 hover:border-blue-400/50 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-blue-500/20"
          >
            <Home className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            <span className="text-neutral-200 group-hover:text-white font-medium">Home</span>
          </button>
        </div>
      </header>

      <div className="flex pt-20">
        {/* Premium Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-80 bg-gradient-to-b from-neutral-950/98 via-neutral-900/98 to-neutral-950/98 backdrop-blur-2xl border-r border-gradient-to-b from-blue-500/20 via-purple-500/10 to-blue-500/20 pt-20 transform transition-all duration-500 ease-out shadow-2xl shadow-blue-500/10 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                Navigation
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group w-full flex items-center space-x-4 px-6 py-4 text-left rounded-2xl transition-all duration-300 relative overflow-hidden ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/20 border border-blue-500/40 shadow-lg shadow-blue-500/20'
                      : 'hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 border border-transparent hover:border-blue-500/20'
                  }`}
                >
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                  )}
                  
                  <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gradient-to-r from-neutral-800 to-neutral-700 text-neutral-400 group-hover:from-blue-600/20 group-hover:to-purple-600/20 group-hover:text-blue-400'
                  }`}>
                    {item.number}
                  </div>
                  
                  <div className="relative flex-1">
                    <span className={`font-semibold transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-neutral-300 group-hover:text-white'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                  
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Premium Main Content */}
        <main className="flex-1 lg:ml-80">
          <div className="max-w-5xl mx-auto px-8 py-16">
            
            {/* Hero Section */}
            <div className="mb-20 text-center">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Technical Documentation</span>
              </div>
              
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text">
                  Blur Protocol
                </span>
                <br />
                <span className="text-neutral-200">Whitepaper</span>
              </h1>
              
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technical documentation covering all aspects of Blur Protocol's 
                revolutionary AI-powered memecoin scanning technology.
              </p>
            </div>

            {/* Official Contacts */}
            <section id="contacts" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl shadow-blue-500/30">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Official Contacts</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                {/* Channels */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-neutral-200 mb-8">Official Channels</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://t.me/blurconnect" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                      <div className="relative p-8 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700/50 group-hover:border-blue-500/40 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg group-hover:shadow-blue-500/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                              <span className="text-2xl">📱</span>
                            </div>
                            <div>
                              <div className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">@blurconnect</div>
                              <div className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">Technical support, FAQ, CEO</div>
                            </div>
                          </div>
                          <ExternalLink className="w-6 h-6 text-neutral-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://t.me/BlurCryptoBot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                      <div className="relative p-8 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700/50 group-hover:border-blue-500/40 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg group-hover:shadow-blue-500/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                              <span className="text-2xl">🤖</span>
                            </div>
                            <div>
                              <div className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">@BlurCryptoBot</div>
                              <div className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">Official Blur bot in Telegram</div>
                            </div>
                          </div>
                          <ExternalLink className="w-6 h-6 text-neutral-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Wallets */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-neutral-200 mb-8">Official Wallets</h3>
                  
                  <div className="space-y-4">
                    {wallets.map((wallet, index) => (
                      <div key={index} className="group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                        <div className="relative p-6 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700/50 group-hover:border-blue-500/40 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-blue-300">{wallet.name}</span>
                            <button
                              onClick={() => handleCopyWallet(wallet.address)}
                              className="p-3 text-neutral-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-500/30"
                            >
                              {copiedWallet === wallet.address ? 
                                <Check className="w-5 h-5 text-green-400" /> : 
                                <Copy className="w-5 h-5" />
                              }
                            </button>
                          </div>
                          <div className="bg-gradient-to-r from-neutral-950/80 to-neutral-900/80 border border-neutral-700/30 rounded-xl p-4 backdrop-blur-sm">
                            <code className="text-sm text-blue-400 font-mono break-all">{wallet.address}</code>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-neutral-500 italic">
                    * Wallets can be changed after staff agreement
                  </p>
                </div>
              </div>
            </section>

            {/* Subscription Policy */}
            <section id="subscription" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl shadow-blue-500/30">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Subscription Policy</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Subscription Duration",
                    content: "Minimum 1 month, lifetime subscriptions available. Duration discussed with technical support team.",
                    icon: "⏱️"
                  },
                  {
                    title: "Account Sharing Policy", 
                    content: "Subscription terminated without refund if shared with third parties. Message forwarding to chat rooms is allowed.",
                    icon: "🔒"
                  },
                  {
                    title: "Refund Policy",
                    content: "Refunds available for bot malfunctions or emergency situations (discussed with CEO).",
                    icon: "💰"
                  },
                  {
                    title: "Renewal Benefits",
                    content: "15% discount for returning customers. Free renewal for technical issues or emergencies.",
                    icon: "🎁"
                  },
                  {
                    title: "Referral System",
                    content: "15% commission + 10% lifetime discount for first referral, then 2% discount for each subsequent referral.",
                    icon: "👥"
                  }
                ].map((item, index) => (
                  <div key={index} className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                    <div className="relative p-8 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700/50 group-hover:border-blue-500/40 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-xl">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">{item.title}</h4>
                          <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Investment Policy */}
            <section id="investment" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl shadow-blue-500/30">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Investment Policy</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
                <div className="relative p-12 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-blue-500/30 rounded-3xl backdrop-blur-sm shadow-2xl shadow-blue-500/20">
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-8xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">10%</div>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-3xl font-bold text-white mb-4">Revenue Share Program</h4>
                      <p className="text-xl text-neutral-300 leading-relaxed">
                        Investments of $7,000 or more receive 10% of all subscription revenue. 
                        All investment terms are discussed directly with the CEO.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Operating Principle */}
            <section id="operating" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl shadow-blue-500/30">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Operating Principle</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    name: "Twitter (X) Scanning AI",
                    performance: "1M posts/sec",
                    description: "Processes posts to detect coin contracts from influencers, analyzes engagement metrics and verification status.",
                    icon: "🐦"
                  },
                  {
                    name: "DEX Scanning AI", 
                    performance: "30K coins/sec",
                    description: "Analyzes liquidity, market cap, volume, holder distribution, insider holdings, and rug probability.",
                    icon: "📊"
                  },
                  {
                    name: "Success Ratio AI",
                    performance: "Real-time",
                    description: "Calculates success ratios, traffic trends, and overall coin popularity metrics.",
                    icon: "📈"
                  },
                  {
                    name: "Solscan AI",
                    performance: "30K coins/sec", 
                    description: "Deep analysis of smart contracts for tokens minted on Wrapped Solana blockchain.",
                    icon: "🔍"
                  },
                  {
                    name: "Validation AI",
                    performance: "<1 second",
                    description: "Final verification layer that compiles data from all AIs before sending to Telegram bot.",
                    icon: "✅"
                  }
                ].map((ai, index) => (
                  <div key={index} className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                    <div className="relative p-8 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700/50 group-hover:border-blue-500/40 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center text-2xl group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                            {ai.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{ai.name}</h4>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">{ai.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl">
                            <span className="text-blue-400 font-bold text-lg">{ai.performance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl shadow-blue-500/30">
                  <span className="text-2xl font-bold text-white">05</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Blur Tokenomics</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
                <div className="relative text-center p-16 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-blue-500/30 rounded-3xl backdrop-blur-sm shadow-2xl shadow-blue-500/20">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Detailed Token Distribution</h3>
                    <p className="text-xl text-neutral-400">Comprehensive breakdown of $BLUR allocation and vesting schedules</p>
                  </div>
                  
                  <button
                    onClick={handleTokenomicsRedirect}
                    className="group inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
                  >
                    <span>View Detailed Tokenomics</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </section>

            {/* Premium Footer */}
            <footer className="pt-16 border-t border-gradient-to-r from-transparent via-blue-500/20 to-transparent">
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <img 
                      src="/media/static/logo2.png" 
                      alt="Blur Logo" 
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                  </div>
                  <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Blur Protocol
                  </span>
                </div>
                <p className="text-neutral-500 text-lg">© 2025 Blur Protocol. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
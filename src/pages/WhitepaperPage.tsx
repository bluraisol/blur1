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
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/20 z-50">
        <div className="flex items-center justify-between h-full px-8">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-3 hover:bg-neutral-800/50 rounded-xl transition-all duration-200"
            >
              {sidebarOpen ? <X className="w-5 h-5 text-neutral-300" /> : <Menu className="w-5 h-5 text-neutral-300" />}
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg"></div>
                <img 
                  src="/media/static/logo2.png" 
                  alt="Blur Logo" 
                  className="relative w-12 h-12 rounded-2xl object-cover border border-blue-500/30"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-neutral-100 tracking-tight">Blur Protocol</h1>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Technical Documentation</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleGoHome}
            className="flex items-center space-x-2 px-4 py-2 text-sm text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 rounded-xl transition-all duration-200 border border-neutral-800/50 hover:border-neutral-700/50"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
        </div>
      </header>

      <div className="flex pt-20">
        {/* Ultra Modern Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-80 bg-neutral-900/50 backdrop-blur-xl border-r border-neutral-800/20 pt-20 transform transition-all duration-300 ease-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-neutral-200 mb-2">Contents</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-200 text-left ${
                      activeSection === item.id
                        ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                        : 'text-neutral-400 hover:bg-neutral-800/30 hover:text-neutral-200 border border-transparent hover:border-neutral-700/30'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-neutral-800/50 text-neutral-500 group-hover:bg-neutral-700/50 group-hover:text-neutral-300'
                    }`}>
                      {item.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{item.title}</div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-80">
          <div className="max-w-5xl mx-auto px-8 py-12">
            
            {/* Hero Section */}
            <div className="mb-20">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Live Documentation</span>
              </div>
              
              <h1 className="text-5xl font-light text-neutral-100 mb-6 tracking-tight">
                Technical <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Documentation</span>
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                Comprehensive guide to Blur Protocol's features, policies, and technical implementation details.
              </p>
            </div>

            {/* Official Contacts */}
            <section id="contacts" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 rounded-2xl">
                  <span className="text-2xl font-bold text-blue-400">01</span>
                </div>
                <div>
                  <h2 className="text-3xl font-light text-neutral-100 mb-2">Official Contacts</h2>
                  <p className="text-neutral-500">Connect with our team and access official resources</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Official Channels */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-neutral-200 mb-6">Official Channels</h3>
                  
                  <a 
                    href="https://t.me/blurconnect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block p-6 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/30 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-medium text-neutral-100 group-hover:text-white">@blurconnect</div>
                      <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <p className="text-neutral-400 group-hover:text-neutral-300">Technical support, FAQ, CEO</p>
                  </a>
                  
                  <a 
                    href="https://t.me/BlurCryptoBot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block p-6 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/30 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-medium text-neutral-100 group-hover:text-white">@BlurCryptoBot</div>
                      <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <p className="text-neutral-400 group-hover:text-neutral-300">Official Blur bot in Telegram</p>
                  </a>
                </div>
                
                {/* Official Wallets */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-neutral-200 mb-6">Official Wallets</h3>
                  
                  <div className="space-y-4">
                    {wallets.map((wallet, index) => (
                      <div key={index} className="p-6 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/30 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-medium text-neutral-100">{wallet.name}</span>
                          <button
                            onClick={() => handleCopyWallet(wallet.address)}
                            className="p-2 text-neutral-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
                          >
                            {copiedWallet === wallet.address ? 
                              <Check className="w-4 h-4 text-green-400" /> : 
                              <Copy className="w-4 h-4" />
                            }
                          </button>
                        </div>
                        <div className="bg-neutral-950/50 rounded-xl p-4 border border-neutral-800/30">
                          <code className="text-sm text-blue-400 font-mono break-all">{wallet.address}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-neutral-500 italic px-2">
                    * Wallets can be changed after staff agreement
                  </p>
                </div>
              </div>
            </section>

            {/* Subscription Policy */}
            <section id="subscription" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 rounded-2xl">
                  <span className="text-2xl font-bold text-blue-400">02</span>
                </div>
                <div>
                  <h2 className="text-3xl font-light text-neutral-100 mb-2">Subscription Policy</h2>
                  <p className="text-neutral-500">Terms and conditions for service subscriptions</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Subscription Duration",
                    content: "Minimum 1 month, lifetime subscriptions available. Duration discussed with technical support team."
                  },
                  {
                    title: "Account Sharing Policy", 
                    content: "Subscription terminated without refund if shared with third parties. Message forwarding to chat rooms is allowed."
                  },
                  {
                    title: "Refund Policy",
                    content: "Refunds available for bot malfunctions or emergency situations (discussed with CEO)."
                  },
                  {
                    title: "Renewal Benefits",
                    content: "15% discount for returning customers. Free renewal for technical issues or emergencies."
                  },
                  {
                    title: "Referral System",
                    content: "15% commission + 10% lifetime discount for first referral, then 2% discount for each subsequent referral."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/30 rounded-2xl hover:border-neutral-700/50 transition-all duration-300">
                    <h4 className="font-semibold text-neutral-100 mb-3 text-lg">{item.title}</h4>
                    <p className="text-neutral-400 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Investment Policy */}
            <section id="investment" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 rounded-2xl">
                  <span className="text-2xl font-bold text-blue-400">03</span>
                </div>
                <div>
                  <h2 className="text-3xl font-light text-neutral-100 mb-2">Investment Policy</h2>
                  <p className="text-neutral-500">Revenue sharing and investment opportunities</p>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-3xl">
                <div className="flex items-start space-x-6">
                  <div className="text-5xl font-light text-blue-400">10%</div>
                  <div>
                    <h4 className="text-2xl font-semibold text-blue-300 mb-4">Revenue Share Program</h4>
                    <p className="text-blue-200/80 text-lg leading-relaxed">
                      Investments of $7,000 or more receive 10% of all subscription revenue. 
                      All investment terms are discussed directly with the CEO.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Operating Principle */}
            <section id="operating" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 rounded-2xl">
                  <span className="text-2xl font-bold text-blue-400">04</span>
                </div>
                <div>
                  <h2 className="text-3xl font-light text-neutral-100 mb-2">Operating Principle</h2>
                  <p className="text-neutral-500">How our AI systems work together</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    name: "Twitter (X) Scanning AI",
                    performance: "1M posts/sec",
                    description: "Processes posts to detect coin contracts from influencers, analyzes engagement metrics and verification status."
                  },
                  {
                    name: "DEX Scanning AI", 
                    performance: "30K coins/sec",
                    description: "Analyzes liquidity, market cap, volume, holder distribution, insider holdings, and rug probability."
                  },
                  {
                    name: "Success Ratio AI",
                    performance: "Real-time",
                    description: "Calculates success ratios, traffic trends, and overall coin popularity metrics."
                  },
                  {
                    name: "Solscan AI",
                    performance: "30K coins/sec", 
                    description: "Deep analysis of smart contracts for tokens minted on Wrapped Solana blockchain."
                  },
                  {
                    name: "Validation AI",
                    performance: "<1 second",
                    description: "Final verification layer that compiles data from all AIs before sending to Telegram bot."
                  }
                ].map((ai, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/30 rounded-2xl hover:border-neutral-700/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-neutral-100 text-lg">{ai.name}</h4>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                        {ai.performance}
                      </span>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">{ai.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="mb-24">
              <div className="flex items-center space-x-6 mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 rounded-2xl">
                  <span className="text-2xl font-bold text-blue-400">05</span>
                </div>
                <div>
                  <h2 className="text-3xl font-light text-neutral-100 mb-2">Blur Tokenomics</h2>
                  <p className="text-neutral-500">Token distribution and economics</p>
                </div>
              </div>
              
              <div className="text-center p-12 bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/30 rounded-3xl">
                <button
                  onClick={handleTokenomicsRedirect}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  <span className="text-lg">View Detailed Tokenomics</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-12 border-t border-neutral-800/30">
              <p className="text-center text-neutral-500 text-sm">© 2025 Blur Protocol. All rights reserved.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
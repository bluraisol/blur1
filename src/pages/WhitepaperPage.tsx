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
    const element = document.getElementById(`${sectionId}-header`);
    if (element) {
      const headerHeight = 64; // 16 * 4 = 64px (h-16)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px дополнительный отступ
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800/20 z-50">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-neutral-800/50 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center space-x-3">
              <img 
                src="/media/static/logo2.png" 
                alt="Blur Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-lg font-medium">Blur Protocol</span>
            </div>
          </div>
          
          <button
            onClick={handleGoHome}
           className="flex items-center space-x-2 px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
           <img 
             src="/media/static/home.png" 
             alt="Home" 
             className="w-4 h-4 object-contain opacity-60 hover:opacity-100 transition-all duration-200"
           />
            <span>Home</span>
          </button>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Clean Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-neutral-950 border-r border-neutral-800/20 pt-16 transform transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="p-6">
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                    activeSection === item.id
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/30'
                  }`}
                >
                  <span className={`text-xs font-mono w-6 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-neutral-500'
                  }`}>
                    {item.number}
                  </span>
                  <span>{item.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="max-w-4xl mx-auto px-6 py-12">
            
            {/* Hero */}
            <div className="mb-16">
              <h1 className="text-4xl font-light mb-4">Technical Documentation</h1>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Comprehensive guide to Blur Protocol's features, policies, and technical implementation.
              </p>
            </div>

            {/* Official Contacts */}
            <section className="mb-16">
              <div id="contacts-header" className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-mono text-blue-400">01</span>
                </div>
                <h2 className="text-2xl font-light">Official Contacts</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Channels */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-neutral-200">Official Channels</h3>
                  
                  <div className="space-y-3">
                    <a 
                      href="https://t.me/blurconnect" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block p-4 border border-neutral-800/50 rounded-lg hover:border-neutral-700/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-neutral-100 group-hover:text-white">@blurconnect</div>
                          <div className="text-sm text-neutral-400">Technical support, FAQ, CEO</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-blue-400" />
                      </div>
                    </a>
                    
                    <a 
                      href="https://t.me/BlurCryptoBot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block p-4 border border-neutral-800/50 rounded-lg hover:border-neutral-700/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-neutral-100 group-hover:text-white">@BlurCryptoBot</div>
                          <div className="text-sm text-neutral-400">Official Blur bot in Telegram</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-blue-400" />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Wallets */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-neutral-200">Official Wallets</h3>
                  
                  <div className="space-y-3">
                    {wallets.map((wallet, index) => (
                      <div key={index} className="p-4 border border-neutral-800/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-neutral-200">{wallet.name}</span>
                          <button
                            onClick={() => handleCopyWallet(wallet.address)}
                            className="p-1 text-neutral-500 hover:text-blue-400 transition-colors"
                          >
                            {copiedWallet === wallet.address ? 
                              <Check className="w-4 h-4 text-green-400" /> : 
                              <Copy className="w-4 h-4" />
                            }
                          </button>
                        </div>
                        <div className="bg-neutral-900/50 rounded p-2">
                          <code className="text-xs text-blue-400 font-mono break-all">{wallet.address}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs text-neutral-500 mt-3">
                    * Wallets can be changed after staff agreement
                  </p>
                </div>
              </div>
            </section>

            {/* Subscription Policy */}
            <section className="mb-16">
              <div id="subscription-header" className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-mono text-blue-400">02</span>
                </div>
                <h2 className="text-2xl font-light">Subscription Policy</h2>
              </div>
              
              <div className="space-y-6">
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
                  <div key={index} className="border-l-2 border-blue-500/30 pl-4">
                    <h4 className="font-medium text-neutral-100 mb-2">{item.title}</h4>
                    <p className="text-neutral-400 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Investment Policy */}
            <section className="mb-16">
              <div id="investment-header" className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-mono text-blue-400">03</span>
                </div>
                <h2 className="text-2xl font-light">Investment Policy</h2>
              </div>
              
              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl font-light text-blue-400">10%</div>
                  <div>
                    <h4 className="text-lg font-medium text-blue-300 mb-2">Revenue Share Program</h4>
                    <p className="text-blue-200/80 leading-relaxed">
                      Investments of $7,000 or more receive 10% of all subscription revenue. 
                      All investment terms are discussed directly with the CEO.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Operating Principle */}
            <section className="mb-16">
              <div id="operating-header" className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-mono text-blue-400">04</span>
                </div>
                <h2 className="text-2xl font-light">Operating Principle</h2>
              </div>
              
              <div className="space-y-4">
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
                  <div key={index} className="p-4 border border-neutral-800/50 rounded-lg hover:border-neutral-700/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-neutral-100">{ai.name}</h4>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono">
                        {ai.performance}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">{ai.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tokenomics */}
            <section className="mb-16">
              <div id="tokenomics-header" className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-mono text-blue-400">05</span>
                </div>
                <h2 className="text-2xl font-light">Blur Tokenomics</h2>
              </div>
              
              <div className="text-center p-8 border border-neutral-800/50 rounded-lg">
                <button
                  onClick={handleTokenomicsRedirect}
                  className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>View Detailed Tokenomics</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-8 border-t border-neutral-800/20">
              <p className="text-center text-neutral-500 text-sm">© 2025 Blur Protocol. All rights reserved.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink, ArrowRight, Copy, Check, Shield, Users, Coins, Settings, FileText, ChevronRight, Menu, X, ChevronDown } from 'lucide-react';

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
    { id: 'contacts', title: 'Official Contacts', icon: Shield },
    { id: 'subscription', title: 'Subscription Policy', icon: Users },
    { id: 'investment', title: 'Investment Policy', icon: Coins },
    { id: 'operating', title: 'Operating Principle', icon: Settings },
    { id: 'tokenomics', title: 'Tokenomics', icon: FileText }
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-neutral-200 z-50">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center space-x-3">
              <img 
                src="/media/static/logo2.png" 
                alt="Blur Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-lg font-semibold text-neutral-900">Blur Protocol</h1>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleGoHome}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-neutral-50 border-r border-neutral-200 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="pt-6 pb-4">
            <nav className="px-4 space-y-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="max-w-4xl mx-auto px-6 py-8">
            
            {/* Page Title */}
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">Technical Documentation</h1>
              <p className="text-lg text-neutral-600">Comprehensive guide to Blur Protocol's features and policies</p>
            </div>

            {/* Official Contacts */}
            <section id="contacts" className="mb-16">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Official Contacts</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Official Channels</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://t.me/blurconnect" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all group"
                    >
                      <div>
                        <div className="font-medium text-neutral-900">@blurconnect</div>
                        <div className="text-sm text-neutral-500">Technical support, FAQ, CEO</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                    </a>
                    
                    <a 
                      href="https://t.me/BlurCryptoBot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all group"
                    >
                      <div>
                        <div className="font-medium text-neutral-900">@BlurCryptoBot</div>
                        <div className="text-sm text-neutral-500">Official Blur bot in Telegram</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Official Wallets</h3>
                  <div className="space-y-3">
                    {wallets.map((wallet, index) => (
                      <div key={index} className="p-4 bg-white border border-neutral-200 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-neutral-900">{wallet.name}</span>
                          <button
                            onClick={() => handleCopyWallet(wallet.address)}
                            className="p-2 text-neutral-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            {copiedWallet === wallet.address ? 
                              <Check className="w-4 h-4 text-green-500" /> : 
                              <Copy className="w-4 h-4" />
                            }
                          </button>
                        </div>
                        <div className="bg-neutral-50 rounded-lg p-3">
                          <code className="text-sm text-blue-600 font-mono break-all">{wallet.address}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-neutral-500 italic">
                      * Wallets can be changed after staff agreement
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Subscription Policy */}
            <section id="subscription" className="mb-16">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Subscription Policy</h2>
              </div>
              
              <div className="space-y-4">
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
                  <div key={index} className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                    <p className="text-neutral-600 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Investment Policy */}
            <section id="investment" className="mb-16">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Coins className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Investment Policy</h2>
              </div>
              
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl font-bold text-blue-600">10%</div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Revenue Share Program</h4>
                    <p className="text-blue-800">
                      Investments of $7,000 or more receive 10% of all subscription revenue. 
                      All investment terms are discussed directly with the CEO.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Operating Principle */}
            <section id="operating" className="mb-16">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Operating Principle</h2>
              </div>
              
              <div className="space-y-3">
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
                  <div key={index} className="p-4 bg-white border border-neutral-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-neutral-900">{ai.name}</h4>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                        {ai.performance}
                      </span>
                    </div>
                    <p className="text-neutral-600">{ai.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="mb-16">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Blur Tokenomics</h2>
              </div>
              
              <div className="text-center p-8 bg-white border border-neutral-200 rounded-lg">
                <button
                  onClick={handleTokenomicsRedirect}
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>View Detailed Tokenomics</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-8 border-t border-neutral-200">
              <p className="text-center text-neutral-500 text-sm">© 2025 Blur Protocol. All rights reserved.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
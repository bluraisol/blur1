import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink, ArrowRight, Copy, Check, Shield, Users, Coins, Settings, FileText } from 'lucide-react';

export default function WhitepaperPage() {
  const navigate = useNavigate();
  const [copiedWallet, setCopiedWallet] = useState('');

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
    { name: 'Tether USDT TRC-20 (TRX)', address: 'TGU8xcD3Qg8zn2pLxkc8zKVhV3QvGiFh8b', color: 'from-green-500 to-emerald-600' },
    { name: 'Solana (SOL)', address: 'Ckq7txJnC9xH3WkrkEheSYXbV8iqtwTD963gRCKvetET', color: 'from-purple-500 to-violet-600' },
    { name: 'Bitcoin (BTC)', address: 'bc1qsuepk6ktryym2n4a6z996qmm4t7a0y0s38yp5z', color: 'from-orange-500 to-amber-600' },
    { name: 'Ethereum (ETH)', address: '0xfe3A2437e0e0E3497C77924B5688d74B10bADEb6', color: 'from-blue-500 to-indigo-600' }
  ];

  const sections = [
    {
      id: 1,
      title: 'Official Contacts',
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Subscription Policy',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Investment Policy',
      icon: Coins,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Operating Principle',
      icon: Settings,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Tokenomics',
      icon: FileText,
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Go Home Button */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={handleGoHome}
          className="group flex items-center space-x-2 bg-white/5 border border-white/10 hover:border-blue-400/30 px-4 py-2.5 rounded-xl backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:scale-105"
        >
          <Home className="w-4 h-4 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
          <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">Home</span>
        </button>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-4 backdrop-blur-xl">
                <img 
                  src="/media/static/logo2.png" 
                  alt="Blur Logo" 
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-light tracking-tight">
              <span className="text-transparent bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text">
                Blur Protocol
              </span>
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
            <p className="text-xl font-light text-neutral-400 tracking-wide">Technical Documentation</p>
          </div>
        </div>

        <div className="space-y-16">
          
          {/* Section 1: Official Contacts */}
          <section id="section-1" className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-white">Official Contacts</h2>
                    <p className="text-neutral-400 text-sm">Verified project channels and wallets</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-200 mb-4">Official Channels</h3>
                    <div className="grid gap-3">
                      <a 
                        href="https://t.me/blurconnect" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between bg-white/5 border border-white/10 hover:border-blue-400/30 rounded-2xl p-4 transition-all duration-300 hover:bg-white/10"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                            <ExternalLink className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="font-medium text-white group-hover:text-blue-200 transition-colors duration-300">@blurconnect</div>
                            <div className="text-xs text-neutral-500">Technical support, FAQ, CEO</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1" />
                      </a>
                      
                      <a 
                        href="https://t.me/BlurCryptoBot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between bg-white/5 border border-white/10 hover:border-blue-400/30 rounded-2xl p-4 transition-all duration-300 hover:bg-white/10"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                            <ExternalLink className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="font-medium text-white group-hover:text-blue-200 transition-colors duration-300">@BlurCryptoBot</div>
                            <div className="text-xs text-neutral-500">Official Blur bot in Telegram</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-neutral-200 mb-4">Official Wallets</h3>
                    <div className="grid gap-3">
                      {wallets.map((wallet, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 bg-gradient-to-r ${wallet.color} rounded-lg flex items-center justify-center`}>
                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                              </div>
                              <span className="font-medium text-neutral-200">{wallet.name}</span>
                            </div>
                            <button
                              onClick={() => handleCopyWallet(wallet.address)}
                              className="p-2 text-neutral-500 hover:text-blue-400 transition-colors duration-300 hover:bg-white/10 rounded-lg"
                            >
                              {copiedWallet === wallet.address ? 
                                <Check className="w-4 h-4 text-green-400" /> : 
                                <Copy className="w-4 h-4" />
                              }
                            </button>
                          </div>
                          <div className="bg-black/20 border border-white/5 rounded-xl p-3">
                            <code className="text-xs text-blue-300 font-mono break-all">{wallet.address}</code>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-neutral-500 mt-3 italic">
                      * Wallets can be changed after staff agreement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Subscription Policy */}
          <section id="section-2" className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-white">Subscription Policy</h2>
                    <p className="text-neutral-400 text-sm">Terms and conditions for subscriptions</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Subscription Duration",
                      content: "Minimum 1 month, lifetime subscriptions available. Duration discussed with technical support team.",
                      details: ["Minimum: 1 month", "Lifetime options available"]
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
                      content: "15% discount for returning customers. Free renewal for technical issues or emergencies.",
                      details: ["15% discount for returning users", "Free renewal for technical issues"]
                    },
                    {
                      title: "Referral System",
                      content: "15% commission + 10% lifetime discount for first referral, then 2% discount for each subsequent referral.",
                      details: ["15% commission on first referral", "10% lifetime discount", "2% additional discount per referral"]
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <h4 className="font-medium text-neutral-200 mb-2">{item.title}</h4>
                      <p className="text-sm text-neutral-400 mb-3">{item.content}</p>
                      {item.details && (
                        <div className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                              <span className="text-xs text-neutral-500">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Investment Policy */}
          <section id="section-3" className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3">
                      <Coins className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-white">Investment Policy</h2>
                    <p className="text-neutral-400 text-sm">Partnership and investment opportunities</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-blue-400">10%</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-200 mb-2">Revenue Share Program</h4>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        Investments of $7,000 or more receive 10% of all subscription revenue. 
                        All investment terms are discussed directly with the CEO.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Operating Principle */}
          <section id="section-4" className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-white">Operating Principle</h2>
                    <p className="text-neutral-400 text-sm">How Blur AI systems work</p>
                  </div>
                </div>
                
                <div className="grid gap-4">
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
                    <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-neutral-200">{ai.name}</h4>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-lg">
                          {ai.performance}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-400">{ai.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Tokenomics */}
          <section id="section-5" className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-sm"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-white">Blur Tokenomics</h2>
                    <p className="text-neutral-400 text-sm">Token distribution and economics</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleTokenomicsRedirect}
                    className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/25"
                  >
                    <span>View Detailed Tokenomics</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Elegant Footer */}
        <div className="text-center mt-20 pt-8">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6"></div>
          <p className="text-neutral-500 text-sm font-light">© 2025 Blur Protocol. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
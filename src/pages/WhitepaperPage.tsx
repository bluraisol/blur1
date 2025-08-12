import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink, ArrowRight, Copy, Check, Shield, Users, Coins, Settings, FileText, ChevronRight } from 'lucide-react';

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
    { name: 'Tether USDT TRC-20 (TRX)', address: 'TGU8xcD3Qg8zn2pLxkc8zKVhV3QvGiFh8b' },
    { name: 'Solana (SOL)', address: 'Ckq7txJnC9xH3WkrkEheSYXbV8iqtwTD963gRCKvetET' },
    { name: 'Bitcoin (BTC)', address: 'bc1qsuepk6ktryym2n4a6z996qmm4t7a0y0s38yp5z' },
    { name: 'Ethereum (ETH)', address: '0xfe3A2437e0e0E3497C77924B5688d74B10bADEb6' }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <div className="border-b border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/media/static/logo2.png" 
                alt="Blur Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-2xl font-semibold text-white">Blur Protocol</h1>
                <p className="text-sm text-neutral-400">Technical Documentation</p>
              </div>
            </div>
            <button
              onClick={handleGoHome}
              className="flex items-center space-x-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors duration-200"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-16">
          
          {/* Section 1: Official Contacts */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">Official Contacts</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-neutral-200 mb-4">Official Channels</h3>
                <div className="space-y-3">
                  <a 
                    href="https://t.me/blurconnect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors duration-200 group"
                  >
                    <div>
                      <div className="font-medium text-white">@blurconnect</div>
                      <div className="text-sm text-neutral-400">Technical support, FAQ, CEO</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors duration-200" />
                  </a>
                  
                  <a 
                    href="https://t.me/BlurCryptoBot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors duration-200 group"
                  >
                    <div>
                      <div className="font-medium text-white">@BlurCryptoBot</div>
                      <div className="text-sm text-neutral-400">Official Blur bot in Telegram</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors duration-200" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-200 mb-4">Official Wallets</h3>
                <div className="space-y-3">
                  {wallets.map((wallet, index) => (
                    <div key={index} className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-neutral-200">{wallet.name}</span>
                        <button
                          onClick={() => handleCopyWallet(wallet.address)}
                          className="p-2 text-neutral-500 hover:text-blue-400 transition-colors duration-200"
                        >
                          {copiedWallet === wallet.address ? 
                            <Check className="w-4 h-4 text-green-400" /> : 
                            <Copy className="w-4 h-4" />
                          }
                        </button>
                      </div>
                      <div className="bg-neutral-800 rounded-lg p-3">
                        <code className="text-sm text-blue-300 font-mono break-all">{wallet.address}</code>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-neutral-500 mt-3 italic">
                  * Wallets can be changed after staff agreement
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Subscription Policy */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">Subscription Policy</h2>
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
                <div key={index} className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                  <h4 className="font-medium text-neutral-200 mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-400">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Investment Policy */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Coins className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">Investment Policy</h2>
            </div>
            
            <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-3xl font-bold text-blue-400">10%</div>
                <div>
                  <h4 className="font-medium text-blue-200 mb-2">Revenue Share Program</h4>
                  <p className="text-sm text-neutral-300">
                    Investments of $7,000 or more receive 10% of all subscription revenue. 
                    All investment terms are discussed directly with the CEO.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Operating Principle */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Settings className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">Operating Principle</h2>
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
                <div key={index} className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-200">{ai.name}</h4>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      {ai.performance}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400">{ai.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Tokenomics */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">Blur Tokenomics</h2>
            </div>
            
            <div className="text-center p-8 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <button
                onClick={handleTokenomicsRedirect}
                className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <span>View Detailed Tokenomics</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-neutral-800/50">
          <p className="text-neutral-500 text-sm">© 2025 Blur Protocol. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
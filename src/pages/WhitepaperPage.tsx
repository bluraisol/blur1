import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink, Copy, Check, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Go Home Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={handleGoHome}
          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 px-4 py-2 rounded-lg transition-colors duration-200"
        >
          <Home className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Home</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 border-b border-gray-200 pb-12">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/media/static/logo2.png" 
              alt="Blur Logo" 
              className="w-16 h-16 rounded-xl object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            Blur Protocol
          </h1>
          <p className="text-lg text-gray-600">Technical Documentation</p>
        </div>

        <div className="space-y-12">
          
          {/* Section 1: Official Contacts */}
          <section>
            <div className="border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Official Contacts</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Official Channels</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://t.me/blurconnect" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div>
                        <div className="font-medium text-gray-900">@blurconnect</div>
                        <div className="text-sm text-gray-600">Technical support, FAQ, CEO</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                    
                    <a 
                      href="https://t.me/BlurCryptoBot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div>
                        <div className="font-medium text-gray-900">@BlurCryptoBot</div>
                        <div className="text-sm text-gray-600">Official Blur bot in Telegram</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Official Wallets</h3>
                  <div className="space-y-3">
                    {wallets.map((wallet, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-gray-800">{wallet.name}</span>
                          <button
                            onClick={() => handleCopyWallet(wallet.address)}
                            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
                          >
                            {copiedWallet === wallet.address ? 
                              <Check className="w-4 h-4 text-green-600" /> : 
                              <Copy className="w-4 h-4" />
                            }
                          </button>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded p-3">
                          <code className="text-sm text-gray-700 font-mono break-all">{wallet.address}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-3 italic">
                    * Wallets can be changed after staff agreement
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Subscription Policy */}
          <section>
            <div className="border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Subscription Policy</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-2">Subscription Duration</h4>
                  <p className="text-gray-600 mb-2">Minimum 1 month, lifetime subscriptions available. Duration discussed with technical support team.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Minimum: 1 month</li>
                    <li>• Lifetime options available</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-2">Account Sharing Policy</h4>
                  <p className="text-gray-600">Subscription terminated without refund if shared with third parties. Message forwarding to chat rooms is allowed.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-2">Refund Policy</h4>
                  <p className="text-gray-600">Refunds available for bot malfunctions or emergency situations (discussed with CEO).</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-2">Renewal Benefits</h4>
                  <p className="text-gray-600 mb-2">15% discount for returning customers. Free renewal for technical issues or emergencies.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• 15% discount for returning users</li>
                    <li>• Free renewal for technical issues</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-2">Referral System</h4>
                  <p className="text-gray-600 mb-2">15% commission + 10% lifetime discount for first referral, then 2% discount for each subsequent referral.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• 15% commission on first referral</li>
                    <li>• 10% lifetime discount</li>
                    <li>• 2% additional discount per referral</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Investment Policy */}
          <section>
            <div className="border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Investment Policy</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">10%</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900 mb-2">Revenue Share Program</h4>
                    <p className="text-blue-800">
                      Investments of $7,000 or more receive 10% of all subscription revenue. 
                      All investment terms are discussed directly with the CEO.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Operating Principle */}
          <section>
            <div className="border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Operating Principle</h2>
              
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
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">{ai.name}</h4>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {ai.performance}
                      </span>
                    </div>
                    <p className="text-gray-600">{ai.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: Tokenomics */}
          <section>
            <div className="border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Tokenomics</h2>
              
              <div className="text-center">
                <button
                  onClick={handleTokenomicsRedirect}
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <span>View Detailed Tokenomics</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">© 2025 Blur Protocol. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
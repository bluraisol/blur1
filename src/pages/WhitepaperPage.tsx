import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, FileText, Users, DollarSign, Cog, Coins } from 'lucide-react';

export default function WhitepaperPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Go Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={handleGoHome}
          className="flex items-center space-x-2 bg-neutral-900/80 hover:bg-neutral-800/80 border border-neutral-700/50 hover:border-blue-500/50 text-neutral-300 hover:text-white px-4 py-2 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <Home className="w-4 h-4" />
          <span className="text-sm font-medium">Go Home</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="/logo2.png" 
              alt="Blur Logo" 
              className="w-16 h-16 rounded-xl shadow-xl shadow-blue-500/40 object-cover ring-1 ring-blue-500/20"
            />
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tighter mb-6">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Whitepaper</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            Official documentation and technical specifications for the Blur AI-powered memecoin scanner
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          
          {/* Section 1: Official Contacts */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-light text-neutral-200">1. Official Contacts</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-neutral-100 mb-4">1.1 Official Project Sources</h3>
                <div className="space-y-3 text-neutral-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://t.me/blurconnect" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-mono">
                        https://t.me/blurconnect
                      </a>
                      <span className="text-neutral-400"> - technical support, FAQ and sales of subscriptions, CEO</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://t.me/BlurCryptoBot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-mono">
                        https://t.me/BlurCryptoBot
                      </a>
                      <span className="text-neutral-400"> - the only official Blur bot in Telegram</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-neutral-100 mb-4">1.2 Official Project Wallets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-lg p-4">
                    <div className="text-sm text-neutral-400 mb-2">Tether USDT TRC-20 (TRX)</div>
                    <div className="font-mono text-xs text-blue-400 break-all">TGU8xcD3Qg8zn2pLxkc8zKVhV3QvGiFh8b</div>
                  </div>
                  <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-lg p-4">
                    <div className="text-sm text-neutral-400 mb-2">Solana (SOL)</div>
                    <div className="font-mono text-xs text-blue-400 break-all">Ckq7txJnC9xH3WkrkEheSYXbV8iqtwTD963gRCKvetET</div>
                  </div>
                  <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-lg p-4">
                    <div className="text-sm text-neutral-400 mb-2">Bitcoin (BTC)</div>
                    <div className="font-mono text-xs text-blue-400 break-all">bc1qsuepk6ktryym2n4a6z996qmm4t7a0y0s38yp5z</div>
                  </div>
                  <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-lg p-4">
                    <div className="text-sm text-neutral-400 mb-2">Ethereum (ETH)</div>
                    <div className="font-mono text-xs text-blue-400 break-all">0xfe3A2437e0e0E3497C77924B5688d74B10bADEb6</div>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 mt-4 italic">
                  * Wallets can be changed after the agreement of staff members.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Subscriptions Policy */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <DollarSign className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-light text-neutral-200">2. Subscriptions Policy</h2>
            </div>
            
            <div className="space-y-6 text-neutral-300">
              <div>
                <h3 className="text-lg font-medium text-neutral-100 mb-3">2.1 Subscription Duration</h3>
                <p className="mb-2">Subscription duration is fully discussed with one of the technical support team.</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>2.1.1</strong> Minimum available subscription duration - 1 month</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>2.1.2</strong> Lifetime subscriptions are available too</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-neutral-100 mb-3">2.2 Termination Policy</h3>
                <p>The subscription is terminated without refund if the user shares his/her subscription account with third parties (forwarding messages to chat rooms with Blur calls is allowed).</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-neutral-100 mb-3">2.3 Refund Policy</h3>
                <p>Money can be refunded only in case of unsuccessful bot operation or in emergency situations of clients (to be discussed additionally with CEO).</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-neutral-100 mb-3">2.4 Renewal Policy</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>2.4.1</strong> Subscription may be renewed for free in case Blur does not work properly or in emergency situations of clients (to be discussed additionally with CEO)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>2.4.2</strong> Subscription renewal is 15% cheaper for customers who have used Blur before</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-neutral-100 mb-3">2.5 Referral System</h3>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p><strong>2.5.1</strong> For each customer who purchases a Blur subscription because of you, you will receive:</p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>15% of the subscription price</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Lifetime discount of 10% on subscription renewal</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>2% discount for each subsequent customer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Investment Policy */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Coins className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-light text-neutral-200">3. Investment Policy</h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6">
              <p className="text-neutral-300 text-lg">
                For every investment in Blur development of <span className="text-green-400 font-bold">$7,000 or more</span>, 
                you will <span className="text-green-400 font-bold">ALWAYS</span> receive <span className="text-green-400 font-bold">10%</span> of subscriptions sold.
              </p>
              <p className="text-neutral-400 mt-2 text-sm">
                Investments are to be discussed with CEO.
              </p>
            </div>
          </section>

          {/* Section 4: Operating Principle */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Cog className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-light text-neutral-200">4. Operating Principle of Blur</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500/50 pl-6">
                <h3 className="text-lg font-medium text-neutral-100 mb-3">4.1 Blur Twitter (X) Scanning AI</h3>
                <p className="text-neutral-300">
                  Made by Blur Team processes up to <span className="text-blue-400 font-bold">1,000,000 posts per second</span> in search of a coin contract address shared by a popular influencer. It also has a feature to scan top X tweets (likes, subscribers, views, retweets, replies, bookmarks, quotes,) and authors verification percent.
                </p>
              </div>

              <div className="border-l-4 border-purple-500/50 pl-6">
                <h3 className="text-lg font-medium text-neutral-100 mb-3">4.2 Blur DEX Scanning AI</h3>
                <p className="text-neutral-300">
                  Made by Blur Team processes up to <span className="text-purple-400 font-bold">30,000 coins per second</span> and looks for coins that match such characteristics as liquidity, market cap, volume, top 10 holders holding percent, insider holding percent, sniper holding percent, bundlers, rug probability, DEV's previous coins.
                </p>
              </div>

              <div className="border-l-4 border-green-500/50 pl-6">
                <h3 className="text-lg font-medium text-neutral-100 mb-3">4.3 Blur Success Ratio AI</h3>
                <p className="text-neutral-300">
                  Made by Blur Team counts success ratio of particular coin, traffic success and popularity of coin in general.
                </p>
              </div>

              <div className="border-l-4 border-orange-500/50 pl-6">
                <h3 className="text-lg font-medium text-neutral-100 mb-3">4.4 Blur Solscan AI</h3>
                <p className="text-neutral-300">
                  Made by Blur Team processes up to <span className="text-orange-400 font-bold">30,000 coins per seconds</span> and researches all smart-contracts of coins minted in the Wrapped Solana blockchain.
                </p>
              </div>

              <div className="border-l-4 border-cyan-500/50 pl-6">
                <h3 className="text-lg font-medium text-neutral-100 mb-3">4.5 Blur Validation AI</h3>
                <p className="text-neutral-300">
                  Made by Blur Team is responsible for outputting the coin to the Blur Bot in Telegram after the coin passing inspection of the previous 4 Blur AI's. It outputs a coin with all the necessary characteristics and links to terminals and Twitter (X). All Blur AI's work simultaneously and the check takes <span className="text-cyan-400 font-bold">no more than one second</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Tokenomics */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Coins className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-light text-neutral-200">5. Blur Coin Tokenomics</h2>
            </div>
            
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-light text-neutral-200 mb-4">Coming Soon</h3>
              <p className="text-neutral-400">
                Detailed tokenomics information will be available soon. Stay tuned for updates.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t border-neutral-800/30">
          <p className="text-neutral-500 text-sm">
            © 2025 Blur. All rights reserved. This document contains official project information.
          </p>
          <button
            onClick={handleGoHome}
            className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
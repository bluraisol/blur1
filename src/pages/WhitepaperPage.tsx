import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink, ArrowRight, Copy, Check } from 'lucide-react';

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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5"></div>
      
      {/* Go Home Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={handleGoHome}
          className="flex items-center space-x-2 bg-neutral-900/80 border border-neutral-700/50 hover:border-blue-500/50 px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200 hover:scale-105"
        >
          <Home className="w-4 h-4 text-neutral-400" />
          <span className="text-sm text-neutral-300">Go Home</span>
        </button>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/media/static/logo2.png" 
              alt="Blur Logo" 
              className="w-12 h-12 rounded-lg object-cover shadow-lg shadow-blue-500/20"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-3">
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Blur Crypto Bot</span>
            <br />
            <span className="text-neutral-200">on Solana</span>
          </h1>
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-3"></div>
          
          <h2 className="text-xl font-light text-neutral-400">Whitepaper</h2>
        </div>

        <div className="space-y-8">
          
          {/* Section 1: Official Contacts */}
          <section className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">1</div>
              <h3 className="text-xl font-medium text-neutral-100">Official contacts related to the project</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-300 mb-3">1.1 The only sources officially linked to the project:</h4>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center justify-between bg-neutral-800/30 border border-neutral-700/30 rounded-lg p-3">
                    <div>
                      <a 
                        href="https://t.me/blurconnect" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono text-sm"
                      >
                        https://t.me/blurconnect
                      </a>
                      <p className="text-neutral-500 text-xs mt-1">technical support, FAQ and sales of subscriptions, CEO</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-500" />
                  </div>
                  
                  <div className="flex items-center justify-between bg-neutral-800/30 border border-neutral-700/30 rounded-lg p-3">
                    <div>
                      <a 
                        href="https://t.me/BlurCryptoBot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono text-sm"
                      >
                        https://t.me/BlurCryptoBot
                      </a>
                      <p className="text-neutral-500 text-xs mt-1">the only official Blur bot in Telegram</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-500" />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-neutral-300 mb-3">1.2 The only wallets officially linked to the project:</h4>
                <div className="space-y-2 ml-4">
                  {wallets.map((wallet, index) => (
                    <div key={index} className="bg-neutral-800/30 border border-neutral-700/30 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-neutral-300 text-sm font-medium">{wallet.name}:</span>
                        <button
                          onClick={() => handleCopyWallet(wallet.address)}
                          className="p-1 text-neutral-500 hover:text-blue-400 transition-colors duration-200"
                          title="Copy wallet address"
                        >
                          {copiedWallet === wallet.address ? 
                            <Check className="w-3 h-3 text-green-400" /> : 
                            <Copy className="w-3 h-3" />
                          }
                        </button>
                      </div>
                      <code className="block bg-neutral-900/50 px-3 py-2 rounded text-blue-400 font-mono text-xs break-all">
                        {wallet.address}
                      </code>
                    </div>
                  ))}
                </div>
                <p className="text-neutral-500 text-xs mt-3 ml-4 italic">
                  Wallets can be changed after the agreement of staff members.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Subscriptions Policy */}
          <section className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">2</div>
              <h3 className="text-xl font-medium text-neutral-100">Subscriptions policy</h3>
            </div>
            
            <div className="space-y-3 text-sm text-neutral-300">
              <div className="bg-neutral-800/20 p-4 rounded-lg">
                <p className="font-medium mb-2 text-neutral-200">2.1. Subscription duration is fully discussed with one of the technical support team.</p>
                <div className="ml-4 space-y-1 text-xs">
                  <p>• 2.1.1. Minimum available subscription duration - 1 month</p>
                  <p>• 2.1.2. Lifetime subscriptions are available too</p>
                </div>
              </div>
              
              <div className="bg-neutral-800/20 p-4 rounded-lg">
                <p>2.2. The subscription is terminated without refund if the user shares his/her subscription account with third parties (forwarding messages to chat rooms with Blur calls is allowed).</p>
              </div>
              
              <div className="bg-neutral-800/20 p-4 rounded-lg">
                <p>2.3. Subscription refund policy: money can be refunded only in case of unsuccessful bot operation or in emergency situations of clients (to be discussed additionally with CEO)</p>
              </div>
              
              <div className="bg-neutral-800/20 p-4 rounded-lg">
                <p className="font-medium mb-2 text-neutral-200">2.4. Subscription renewal policy</p>
                <div className="ml-4 space-y-1 text-xs">
                  <p>• 2.4.1. Subscription may be renewed for free in case Blur does not work properly or in emergency situations of clients (to be discussed additionally with CEO)</p>
                  <p>• 2.4.2. Subscription renewal is 15% cheaper for customers who have used Blur before.</p>
                </div>
              </div>
              
              <div className="bg-neutral-800/20 p-4 rounded-lg">
                <p className="font-medium mb-2 text-neutral-200">2.5. Blur referral system</p>
                <div className="ml-4 text-xs">
                  <p>• 2.5.1. For each customer who purchases a Blur subscription because of you, you will receive 15% of the subscription price and a lifetime discount of 10% on subscription renewal, afterward you will receive a 2% discount for each subsequent customer.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Investment Policy */}
          <section className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">3</div>
              <h3 className="text-xl font-medium text-neutral-100">Investment policy</h3>
            </div>
            
            <div className="bg-neutral-800/20 p-4 rounded-lg">
              <p className="text-sm text-neutral-300">
                For every investment in Blur development of $7000 or more, you will ALWAYS receive 10% of subscriptions sold. Investments are to be discussed with CEO.
              </p>
            </div>
          </section>

          {/* Section 4: Operating Principle */}
          <section className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">4</div>
              <h3 className="text-xl font-medium text-neutral-100">Operating principle of Blur</h3>
            </div>
            
            <div className="space-y-3">
              {[
                {
                  title: "4.1. Blur Twitter (X) Scanning AI",
                  content: "made by Blur Team processes up to 1,000,000 posts per second in search of a coin contract address shared by a popular influencer. It also has a feature to scan top X tweets (likes, subscribers, views, retweets, replies, bookmarks, quotes,) and authors verification percent."
                },
                {
                  title: "4.2. Blur DEX Scanning AI", 
                  content: "made by Blur Team processes up to 30,000 coins per second and looks for coins that match such characteristics as liquidity, market cap, volume, top 10 holders holding percent, insider holding percent, sniper holding percent, bundlers, rug probability, DEV's previous coins."
                },
                {
                  title: "4.3. Blur Success ratio AI",
                  content: "made by Blur Team counts success ratio of particular coin, traffic success and popularity of coin in general."
                },
                {
                  title: "4.4. Blur Solscan AI",
                  content: "made by Blur Team processes up to 30,000 coins per seconds and researches all smart-contracts of coins minted in the Wrapped Solana blockchain."
                },
                {
                  title: "4.5. Blur Validation AI",
                  content: "made by Blur Team is responsible for outputting the coin to the Blur Bot in Telegram after the coin passing inspection of the previous 4 Blur AI's. It outputs a coin with all the necessary characteristics and links to terminals and Twitter (X). All Blur AI's work simultaneously and the check takes no more than one second."
                }
              ].map((item, index) => (
                <div key={index} className="bg-neutral-800/20 p-4 rounded-lg">
                  <p className="text-sm text-neutral-300">
                    <span className="font-medium text-neutral-200">{item.title}</span> {item.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Tokenomics */}
          <section className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">5</div>
              <h3 className="text-xl font-medium text-neutral-100">Blur Coin tokenomics</h3>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handleTokenomicsRedirect}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center space-x-2"
              >
                <span>View Tokenomics</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-neutral-800/30">
          <p className="text-neutral-500 text-sm">All rights reserved. © Blur</p>
        </div>
      </div>
    </div>
  );
}
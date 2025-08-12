import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink, ArrowRight } from 'lucide-react';

export default function WhitepaperPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleTokenomicsRedirect = () => {
    navigate('/tokenomics');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 opacity-80" />
      
      {/* Go Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={handleGoHome}
          className="flex items-center space-x-2 bg-gradient-to-r from-neutral-900/80 to-neutral-800/60 border border-neutral-700/50 hover:border-blue-500/50 px-4 py-2 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
        >
          <Home className="w-4 h-4 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
          <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">Go Home</span>
        </button>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img 
              src="/media/static/logo2.png" 
              alt="Blur Logo" 
              className="w-16 h-16 rounded-xl object-cover shadow-xl shadow-blue-500/40 ring-1 ring-blue-500/20"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-none tracking-tighter mb-4">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Blur Crypto Bot</span> on Solana
          </h1>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
          
          <h2 className="text-2xl md:text-3xl font-light text-neutral-300 tracking-wide">
            Whitepaper
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-12">
          
          {/* Section 1: Official Contacts */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <h3 className="text-2xl font-light text-neutral-100">Official contacts related to the project</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-neutral-200 mb-3">1.1 The only sources officially linked to the project:</h4>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center space-x-3">
                    <a 
                      href="https://t.me/blurconnect" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span>https://t.me/blurconnect</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                    <span className="text-neutral-400 text-sm">- technical support, FAQ and sales of subscriptions, CEO</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a 
                      href="https://t.me/BlurCryptoBot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span>https://t.me/BlurCryptoBot</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                    <span className="text-neutral-400 text-sm">- the only official Blur bot in Telegram</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-neutral-200 mb-3">1.2 The only wallets officially linked to the project:</h4>
                <div className="space-y-3 ml-4">
                  <div>
                    <span className="text-neutral-300 font-medium">Tether USDT TRC-20 (TRX):</span>
                    <code className="ml-2 bg-neutral-800/50 px-2 py-1 rounded text-blue-400 text-sm font-mono">TGU8xcD3Qg8zn2pLxkc8zKVhV3QvGiFh8b</code>
                  </div>
                  <div>
                    <span className="text-neutral-300 font-medium">Solana (SOL):</span>
                    <code className="ml-2 bg-neutral-800/50 px-2 py-1 rounded text-blue-400 text-sm font-mono">Ckq7txJnC9xH3WkrkEheSYXbV8iqtwTD963gRCKvetET</code>
                  </div>
                  <div>
                    <span className="text-neutral-300 font-medium">Bitcoin (BTC):</span>
                    <code className="ml-2 bg-neutral-800/50 px-2 py-1 rounded text-blue-400 text-sm font-mono">bc1qsuepk6ktryym2n4a6z996qmm4t7a0y0s38yp5z</code>
                  </div>
                  <div>
                    <span className="text-neutral-300 font-medium">Ethereum (ETH):</span>
                    <code className="ml-2 bg-neutral-800/50 px-2 py-1 rounded text-blue-400 text-sm font-mono">0xfe3A2437e0e0E3497C77924B5688d74B10bADEb6</code>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm mt-3 ml-4 italic">Wallets can be changed after the agreement of staff members.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Subscriptions Policy */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <h3 className="text-2xl font-light text-neutral-100">Subscriptions policy</h3>
            </div>
            
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <div>
                <p className="font-medium mb-2">2.1. Subscription duration is fully discussed with one of the technical support team.</p>
                <div className="ml-6 space-y-1">
                  <p>2.1.1. Minimum available subscription duration - 1 month</p>
                  <p>2.1.2. Lifetime subscriptions are available too</p>
                </div>
              </div>
              
              <p>2.2. The subscription is terminated without refund if the user shares his/her subscription account with third parties (forwarding messages to chat rooms with Blur calls is allowed).</p>
              
              <p>2.3. Subscription refund policy: money can be refunded only in case of unsuccessful bot operation or in emergency situations of clients (to be discussed additionally with CEO)</p>
              
              <div>
                <p className="font-medium mb-2">2.4. Subscription renewal policy</p>
                <div className="ml-6 space-y-1">
                  <p>2.4.1. Subscription may be renewed for free in case Blur does not work properly or in emergency situations of clients (to be discussed additionally with CEO)</p>
                  <p>2.4.2. Subscription renewal is 15% cheaper for customers who have used Blur before.</p>
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">2.5. Blur referral system</p>
                <div className="ml-6">
                  <p>2.5.1. For each customer who purchases a Blur subscription because of you, you will receive 15% of the subscription price and a lifetime discount of 10% on subscription renewal, afterward you will receive a 2% discount for each subsequent customer.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Investment Policy */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <h3 className="text-2xl font-light text-neutral-100">Investment policy</h3>
            </div>
            
            <p className="text-neutral-300 leading-relaxed">
              For every investment in Blur development of $7000 or more, you will ALWAYS receive 10% of subscriptions sold. Investments are to be discussed with CEO.
            </p>
          </section>

          {/* Section 4: Operating Principle */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <h3 className="text-2xl font-light text-neutral-100">Operating principle of Blur</h3>
            </div>
            
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>4.1. Blur Twitter (X) Scanning AI made by Blur Team processes up to 1,000,000 posts per second in search of a coin contract address shared by a popular influencer. It also has a feature to scan top X tweets (likes, subscribers, views, retweets, replies, bookmarks, quotes,) and authors verification percent.</p>
              
              <p>4.2. Blur DEX Scanning AI made by Blur Team processes up to 30,000 coins per second and looks for coins that match such characteristics as liquidity, market cap, volume, top 10 holders holding percent, insider holding percent, sniper holding percent, bundlers, rug probability, DEV's previous coins.</p>
              
              <p>4.3. Blur Success ratio AI made by Blur Team counts success ratio of particular coin, traffic success and popularity of coin in general.</p>
              
              <p>4.4. Blur Solscan AI made by Blur Team processes up to 30,000 coins per seconds and researches all smart-contracts of coins minted in the Wrapped Solana blockchain.</p>
              
              <p>4.5. Blur Validation AI made by Blur Team is responsible for outputting the coin to the Blur Bot in Telegram after the coin passing inspection of the previous 4 Blur AI's. It outputs a coin with all the necessary characteristics and links to terminals and Twitter (X). All Blur AI's work simultaneously and the check takes no more than one second.</p>
            </div>
          </section>

          {/* Section 5: Tokenomics */}
          <section className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
              <h3 className="text-2xl font-light text-neutral-100">Blur Coin tokenomics</h3>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handleTokenomicsRedirect}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-medium uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center space-x-2 group"
              >
                <span>View Tokenomics</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-neutral-800/30">
          <p className="text-neutral-400 text-sm">All rights reserved. © Blur</p>
        </div>
      </div>
    </div>
  );
}
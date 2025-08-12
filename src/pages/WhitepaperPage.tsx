import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink, ArrowRight, Copy, Check } from 'lucide-react';

export default function WhitepaperPage() {
  const navigate = useNavigate();
  const [copiedWallet, setCopiedWallet] = React.useState('');

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
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-blue-400"></div>
          ))}
        </div>
      </div>
      
      {/* Go Home Button */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={handleGoHome}
          className="group flex items-center space-x-3 bg-gradient-to-r from-neutral-900/90 to-neutral-800/80 border border-neutral-700/50 hover:border-blue-500/50 px-6 py-3 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <Home className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
          <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">Go Home</span>
        </button>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-6 mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-2xl blur-xl"></div>
              <img 
                src="/media/static/logo2.png" 
                alt="Blur Logo" 
                className="relative w-20 h-20 rounded-2xl object-cover shadow-2xl shadow-blue-500/40 ring-2 ring-blue-500/30"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tighter">
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Blur Crypto Bot</span>
              <br />
              <span className="text-neutral-200">on Solana</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-neutral-300 tracking-wide">
              Whitepaper
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          
          {/* Section 1: Official Contacts */}
          <section className="group">
            <div className="relative bg-gradient-to-br from-neutral-900/60 via-neutral-800/40 to-neutral-900/60 border border-neutral-700/50 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">1</div>
                  <h3 className="text-3xl font-light text-neutral-100">Official contacts related to the project</h3>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-medium text-neutral-200 mb-6 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>1.1 The only sources officially linked to the project:</span>
                    </h4>
                    <div className="space-y-4 ml-6">
                      <div className="group/link bg-gradient-to-r from-neutral-800/30 to-neutral-700/20 border border-neutral-700/30 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <a 
                              href="https://t.me/blurconnect" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2 font-mono text-lg"
                            >
                              <span>https://t.me/blurconnect</span>
                            </a>
                            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover/link:text-blue-400 transition-colors duration-200" />
                          </div>
                        </div>
                        <p className="text-neutral-400 text-sm mt-2 ml-0">technical support, FAQ and sales of subscriptions, CEO</p>
                      </div>
                      
                      <div className="group/link bg-gradient-to-r from-neutral-800/30 to-neutral-700/20 border border-neutral-700/30 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <a 
                              href="https://t.me/BlurCryptoBot" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2 font-mono text-lg"
                            >
                              <span>https://t.me/BlurCryptoBot</span>
                            </a>
                            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover/link:text-blue-400 transition-colors duration-200" />
                          </div>
                        </div>
                        <p className="text-neutral-400 text-sm mt-2 ml-0">the only official Blur bot in Telegram</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium text-neutral-200 mb-6 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>1.2 The only wallets officially linked to the project:</span>
                    </h4>
                    <div className="space-y-4 ml-6">
                      {wallets.map((wallet, index) => (
                        <div key={index} className="group/wallet bg-gradient-to-r from-neutral-800/30 to-neutral-700/20 border border-neutral-700/30 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-neutral-300 font-medium text-lg">{wallet.name}:</span>
                            <button
                              onClick={() => handleCopyWallet(wallet.address)}
                              className="p-2 text-neutral-500 hover:text-blue-400 transition-colors duration-300 hover:bg-neutral-700/30 rounded-lg"
                              title="Copy wallet address"
                            >
                              {copiedWallet === wallet.address ? 
                                <Check className="w-4 h-4 text-green-400" /> : 
                                <Copy className="w-4 h-4" />
                              }
                            </button>
                          </div>
                          <code className="block bg-neutral-900/50 px-4 py-3 rounded-lg text-blue-400 font-mono text-sm border border-neutral-800/50 break-all">
                            {wallet.address}
                          </code>
                        </div>
                      ))}
                    </div>
                    <p className="text-neutral-500 text-sm mt-6 ml-6 italic bg-neutral-800/20 px-4 py-2 rounded-lg border-l-2 border-blue-500/30">
                      Wallets can be changed after the agreement of staff members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Subscriptions Policy */}
          <section className="group">
            <div className="relative bg-gradient-to-br from-neutral-900/60 via-neutral-800/40 to-neutral-900/60 border border-neutral-700/50 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">2</div>
                  <h3 className="text-3xl font-light text-neutral-100">Subscriptions policy</h3>
                </div>
                
                <div className="space-y-6 text-neutral-300 leading-relaxed">
                  <div className="bg-gradient-to-r from-neutral-800/20 to-transparent p-6 rounded-xl border-l-2 border-blue-500/30">
                    <p className="font-medium mb-4 text-neutral-200 text-lg">2.1. Subscription duration is fully discussed with one of the technical support team.</p>
                    <div className="ml-6 space-y-2">
                      <p className="flex items-center space-x-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span><span>2.1.1. Minimum available subscription duration - 1 month</span></p>
                      <p className="flex items-center space-x-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span><span>2.1.2. Lifetime subscriptions are available too</span></p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-neutral-800/20 to-transparent p-6 rounded-xl border-l-2 border-blue-500/30">
                    <p className="text-lg">2.2. The subscription is terminated without refund if the user shares his/her subscription account with third parties (forwarding messages to chat rooms with Blur calls is allowed).</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-neutral-800/20 to-transparent p-6 rounded-xl border-l-2 border-blue-500/30">
                    <p className="text-lg">2.3. Subscription refund policy: money can be refunded only in case of unsuccessful bot operation or in emergency situations of clients (to be discussed additionally with CEO)</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-neutral-800/20 to-transparent p-6 rounded-xl border-l-2 border-blue-500/30">
                    <p className="font-medium mb-4 text-neutral-200 text-lg">2.4. Subscription renewal policy</p>
                    <div className="ml-6 space-y-2">
                      <p className="flex items-center space-x-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span><span>2.4.1. Subscription may be renewed for free in case Blur does not work properly or in emergency situations of clients (to be discussed additionally with CEO)</span></p>
                      <p className="flex items-center space-x-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span><span>2.4.2. Subscription renewal is 15% cheaper for customers who have used Blur before.</span></p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-neutral-800/20 to-transparent p-6 rounded-xl border-l-2 border-blue-500/30">
                    <p className="font-medium mb-4 text-neutral-200 text-lg">2.5. Blur referral system</p>
                    <div className="ml-6">
                      <p className="flex items-start space-x-2"><span className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span><span>2.5.1. For each customer who purchases a Blur subscription because of you, you will receive 15% of the subscription price and a lifetime discount of 10% on subscription renewal, afterward you will receive a 2% discount for each subsequent customer.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Investment Policy */}
          <section className="group">
            <div className="relative bg-gradient-to-br from-neutral-900/60 via-neutral-800/40 to-neutral-900/60 border border-neutral-700/50 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">3</div>
                  <h3 className="text-3xl font-light text-neutral-100">Investment policy</h3>
                </div>
                
                <div className="bg-gradient-to-r from-neutral-800/20 to-transparent p-6 rounded-xl border-l-2 border-blue-500/30">
                  <p className="text-neutral-300 leading-relaxed text-lg">
                    For every investment in Blur development of $7000 or more, you will ALWAYS receive 10% of subscriptions sold. Investments are to be discussed with CEO.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Operating Principle */}
          <section className="group">
            <div className="relative bg-gradient-to-br from-neutral-900/60 via-neutral-800/40 to-neutral-900/60 border border-neutral-700/50 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">4</div>
                  <h3 className="text-3xl font-light text-neutral-100">Operating principle of Blur</h3>
                </div>
                
                <div className="space-y-6 text-neutral-300 leading-relaxed">
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
                    <div key={index} className="bg-gradient-to-r from-neutral-800/20 to-transparent p-6 rounded-xl border-l-2 border-blue-500/30">
                      <p className="text-lg">
                        <span className="font-medium text-neutral-200">{item.title}</span> {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Tokenomics */}
          <section className="group">
            <div className="relative bg-gradient-to-br from-neutral-900/60 via-neutral-800/40 to-neutral-900/60 border border-neutral-700/50 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">5</div>
                  <h3 className="text-3xl font-light text-neutral-100">Blur Coin tokenomics</h3>
                </div>
                
                <div className="flex justify-center">
                  <button
                    onClick={handleTokenomicsRedirect}
                    className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-6 rounded-2xl font-medium uppercase tracking-wider text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <span>View Tokenomics</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Elegant Footer */}
        <div className="text-center mt-20 pt-12 border-t border-gradient-to-r from-transparent via-neutral-700/50 to-transparent">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <p className="text-neutral-400 text-lg font-light">All rights reserved. © Blur</p>
        </div>
      </div>
    </div>
  );
}
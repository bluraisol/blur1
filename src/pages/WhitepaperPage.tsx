import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowRight, Shield, Zap, Brain, Target, CheckCircle, Users, DollarSign, FileText, Menu } from 'lucide-react';

export default function WhitepaperPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewTokenomics = () => {
    navigate('/tokenomics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = [
    { id: 'contacts', label: 'Official Contacts', icon: Users },
    { id: 'policy', label: 'Subscription Policy', icon: Shield },
    { id: 'investment', label: 'Investment Policy', icon: DollarSign },
    { id: 'operating', label: 'Operating Principle', icon: Brain },
    { id: 'tokenomics', label: 'Tokenomics', icon: FileText }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const officialContacts = [
    {
      platform: 'Telegram Support',
      handle: '@blurconnect',
      url: 'https://t.me/blurconnect',
      description: 'Technical support, FAQ, subscriptions, CEO'
    },
    {
      platform: 'Blur Bot',
      handle: '@BlurCryptoBot',
      url: 'https://t.me/BlurCryptoBot',
      description: 'Official Blur bot in Telegram'
    }
  ];

  const officialWallets = [
    { currency: 'Tether USDT TRC-20 (TRX)', address: 'TGU8xcD3Qg8zn2pLxkc8zKVhV3QvGiFh8b' },
    { currency: 'Solana (SOL)', address: 'Ckq7txJnC9xH3WkrkEheSYXbV8iqtwTD963gRCKvetET' },
    { currency: 'Bitcoin (BTC)', address: 'bc1qsuepk6ktryym2n4a6z996qmm4t7a0y0s38yp5z' },
    { currency: 'Ethereum (ETH)', address: '0xfe3A2437e0e0E3497C77924B5688d74B10bADEb6' }
  ];

  const subscriptionPolicies = [
    {
      title: 'Subscription Duration',
      points: [
        'Minimum available subscription duration - 1 month',
        'Lifetime subscriptions are available',
        'Duration is fully discussed with technical support team'
      ]
    },
    {
      title: 'Termination Policy',
      points: [
        'Subscription terminated without refund if shared with third parties',
        'Forwarding messages to chat rooms with Blur calls is allowed'
      ]
    },
    {
      title: 'Refund Policy',
      points: [
        'Money refunded only in case of unsuccessful bot operation',
        'Emergency situations of clients (discussed with CEO)'
      ]
    },
    {
      title: 'Renewal Benefits',
      points: [
        'Free renewal in case Blur doesn\'t work properly',
        '15% discount for returning customers',
        'Emergency situations handled case-by-case'
      ]
    },
    {
      title: 'Referral System',
      points: [
        '15% commission for each referred customer',
        'Lifetime 10% discount on subscription renewal',
        '2% additional discount for each subsequent referral'
      ]
    }
  ];

  const aiSystems = [
    {
      name: 'Blur Twitter (X) Scanning AI',
      capacity: '1,000,000 posts per second',
      description: 'Processes posts to detect coin contract addresses shared by popular influencers. Analyzes engagement metrics and author verification.',
      icon: Target
    },
    {
      name: 'Blur DEX Scanning AI',
      capacity: '30,000 coins per second',
      description: 'Analyzes liquidity, market cap, volume, holder distribution, insider holdings, sniper activity, bundlers, and rug probability.',
      icon: Zap
    },
    {
      name: 'Blur Success Ratio AI',
      capacity: 'Real-time analysis',
      description: 'Calculates success ratio of individual coins, traffic trends, and overall popularity metrics.',
      icon: CheckCircle
    },
    {
      name: 'Blur Solscan AI',
      capacity: '30,000 coins per second',
      description: 'Researches all smart contracts of coins minted on the Wrapped Solana blockchain for security analysis.',
      icon: Shield
    },
    {
      name: 'Blur Validation AI',
      capacity: 'Sub-second processing',
      description: 'Final verification layer that compiles data from all Blur AIs and outputs qualified coins to Telegram bot.',
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header with Go Home button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo2.png" 
                alt="Blur Logo" 
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <h1 className="text-xl font-light text-white">Blur Whitepaper</h1>
                <p className="text-xs text-neutral-500">Official Documentation</p>
              </div>
            </div>
            
            <button
              onClick={handleGoHome}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light leading-none tracking-tighter mb-6">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Blur</span> Whitepaper
            </h1>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
              Official documentation for the revolutionary AI-powered memecoin scanner on Solana
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="mb-20">
            <div className="flex items-center space-x-2 text-xs text-neutral-500 uppercase tracking-wider mb-8">
              <Menu className="w-3 h-3 text-blue-400" />
              <span>Quick Navigation</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative overflow-hidden bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 hover:border-blue-500/30 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-neutral-900/50 border border-neutral-800/50 rounded-xl flex items-center justify-center group-hover:border-blue-500/30 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-neutral-200 font-medium group-hover:text-white transition-colors duration-300">
                          {item.label}
                        </div>
                        <div className="text-neutral-500 text-sm mt-1 group-hover:text-neutral-400 transition-colors duration-300">
                          {item.id === 'contacts' && 'Official project sources and wallets'}
                          {item.id === 'policy' && 'Terms, refunds, and referral system'}
                          {item.id === 'investment' && 'Investment opportunities and returns'}
                          {item.id === 'operating' && 'AI systems and technology overview'}
                          {item.id === 'tokenomics' && 'Token distribution and economics'}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 1: Official Contacts */}
          <section id="contacts" className="mb-16">
            <h2 className="text-3xl font-light text-neutral-200 mb-8 flex items-center space-x-3">
              <Users className="w-8 h-8 text-blue-400" />
              <span>1. Official Contacts</span>
            </h2>
            
            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-medium text-neutral-100 mb-6">1.1 Official Project Sources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {officialContacts.map((contact, index) => (
                  <div key={index} className="bg-neutral-900/30 border border-neutral-800/30 rounded-lg p-6">
                    <h4 className="text-lg font-medium text-blue-400 mb-2">{contact.platform}</h4>
                    <a 
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-blue-400 transition-colors duration-200 font-mono text-sm mb-2 block"
                    >
                      {contact.handle}
                    </a>
                    <p className="text-neutral-500 text-sm">{contact.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8">
              <h3 className="text-xl font-medium text-neutral-100 mb-6">1.2 Official Project Wallets</h3>
              <div className="space-y-4">
                {officialWallets.map((wallet, index) => (
                  <div key={index} className="bg-neutral-900/30 border border-neutral-800/30 rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <span className="text-blue-400 font-medium">{wallet.currency}</span>
                      <code className="text-neutral-300 font-mono text-sm bg-neutral-800/50 px-3 py-1 rounded break-all">
                        {wallet.address}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-neutral-500 text-sm mt-4 italic">
                * Wallets can be changed after agreement of staff members
              </p>
            </div>
          </section>

          {/* Section 2: Subscription Policy */}
          <section id="policy" className="mb-16">
            <h2 className="text-3xl font-light text-neutral-200 mb-8 flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <span>2. Subscription Policy</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {subscriptionPolicies.map((policy, index) => (
                <div key={index} className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-blue-400 mb-4">{policy.title}</h3>
                  <ul className="space-y-2">
                    {policy.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Investment Policy */}
          <section id="investment" className="mb-16">
            <h2 className="text-3xl font-light text-neutral-200 mb-8 flex items-center space-x-3">
              <DollarSign className="w-8 h-8 text-blue-400" />
              <span>3. Investment Policy</span>
            </h2>
            
            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8">
              <div className="text-center">
                <div className="text-4xl font-light text-blue-400 mb-4">$7,000+</div>
                <h3 className="text-xl font-medium text-neutral-100 mb-4">Investment Threshold</h3>
                <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                  For every investment in Blur development of $7,000 or more, you will ALWAYS receive 
                  10% of subscriptions sold. All investments must be discussed with the CEO.
                </p>
                <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Lifetime Revenue Share: 10%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Operating Principle */}
          <section id="operating" className="mb-16">
            <h2 className="text-3xl font-light text-neutral-200 mb-8 flex items-center space-x-3">
              <Brain className="w-8 h-8 text-blue-400" />
              <span>4. Operating Principle of Blur</span>
            </h2>
            
            <div className="space-y-6">
              {aiSystems.map((system, index) => {
                const IconComponent = system.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/50 transition-all duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h3 className="text-lg font-medium text-neutral-100">{system.name}</h3>
                          <div className="text-sm text-blue-400 font-medium">{system.capacity}</div>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed">{system.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-medium text-neutral-100">Processing Speed</h3>
              </div>
              <p className="text-neutral-300 text-sm">
                All Blur AI systems work simultaneously, enabling the entire coin evaluation process 
                to be completed in under one second with comprehensive analysis and validation.
              </p>
            </div>
          </section>

          {/* Tokenomics Section */}
          <section id="tokenomics" className="mb-16">
            <div className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 border border-neutral-800/50 rounded-xl p-8 text-center">
              <FileText className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl font-light text-neutral-200 mb-4">Blur Coin Tokenomics</h2>
              <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
                Comprehensive breakdown of $BLUR token distribution, allocation strategy, 
                and vesting schedules designed for long-term ecosystem growth.
              </p>
              <button
                onClick={handleViewTokenomics}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <span>View Tokenomics</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-neutral-800/30">
            <p className="text-neutral-500 text-sm">
              © 2025 Blur. All rights reserved. This document contains official project information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}